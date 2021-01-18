import Spell from "../../react-spell-app/src/models/spell.interface";
import { allFileConfigs, masterOutput } from "./config/spell-files.config";
import ISpellData from "./models/spell-data.interface";
import { FileService } from "./services/file.service";
import { basicHash } from "./utils/basic-hash";

/**
 * Aggregates properties that might be different across duplicated spells
 * @param currentSpell The current spell being processed
 * @param duplicateSpell The duplicate
 */
function dedupeSpells(currentSpell: Spell, duplicateSpell: Spell): Spell {
    // Merge the classes
    // console.log(`merging duplicates for ${JSON.stringify(currentSpell)} and ${JSON.stringify(duplicateSpell)}`);
    currentSpell.class = currentSpell.class.concat(duplicateSpell.class.filter(x => !currentSpell.class.includes(x)));

    // merge the archetypes
    if (currentSpell.archetype && duplicateSpell.archetype) {
        // The non-null assertion operator (...currentSpell.archtype! <-- is used here because the linter
        // can't figure out what's going on)
        currentSpell.archetype = currentSpell.archetype.concat(duplicateSpell.archetype.filter(x => !currentSpell.archetype!.includes(x)));
    } else if (duplicateSpell.archetype) {
        currentSpell.archetype = duplicateSpell.archetype;
    }

    return currentSpell;
}

export default async function aggregateSpells() {
    const masterOutputConfig = masterOutput;
    const allSpellConfig = allFileConfigs;

    const masterFileService = new FileService();

    const allSpellLists = await Promise.all(allSpellConfig.map(config => {
        const fileService = new FileService();
        return fileService.read<ISpellData>(config.destinationFileName);
    }));

    const allSpellData = allSpellLists.reduce<ISpellData>((aggregate, current) => {
        aggregate.spells = aggregate.spells.concat(current.spells);
        return aggregate;
    }, { spells: [] });

    console.log('Sorting spells');
    allSpellData.spells.sort((spell1, spell2) => {
        try {
            return spell1.name.toLowerCase() > spell2.name.toLowerCase() ? 1
                : spell1.name.toLowerCase() < spell2.name.toLowerCase() ? -1 : 0;
        } catch (err) {
            console.log(`ERROR SORTING SPELLS: ${JSON.stringify(spell1)} ${JSON.stringify(spell2)}`, JSON.stringify(err));
            throw err;
        }
    });

    console.log('Applying ids and dedupe');
    const hashmap: { [key: number]: number } = {};
    allSpellData.spells = allSpellData.spells.reduce<Spell[]>((aggregate, current) => {
        const id = basicHash(current.name.toLowerCase());

        // If the id exists in the hashmap, we already have this spell
        if (hashmap[id]) {
            console.log(`Found a duplicate for spell ${current.name}: ${hashmap[id]}, hashed id is ${id}. Resolving...`);
            aggregate[hashmap[id]] = dedupeSpells(aggregate[hashmap[id]], current);
            return aggregate;
        }

        current.id = id;
        aggregate.push(current);
        hashmap[id] = aggregate.length - 1;
        return aggregate;
    }, []);

    await masterFileService.save(masterOutputConfig.destinationFileName, allSpellData);

    console.log('Finished writing spells');
}