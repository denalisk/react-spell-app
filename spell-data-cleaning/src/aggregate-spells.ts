import Spell from "../../react-spell-app/src/models/spell.interface";
import { allFileConfigs, masterOutput } from "./config/spell-files.config";
import ISpellData from "./models/spell-data.interface";
import { FileService } from "./services/file.service";
import { basicHash } from "./utils/basic-hash";

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
    const hashmap: { [key: number]: boolean } = {};
    allSpellData.spells = allSpellData.spells.reduce<Spell[]>((aggregate, current) => {
        const id = basicHash(current.name);

        // If the id exists in the hashmap, we already have this spell
        if (hashmap[id]) {
            return aggregate;
        }

        hashmap[id] = true;
        current.id = id;
        aggregate.push(current);
        return aggregate;
    }, []);

    await masterFileService.save(masterOutput.destinationFileName, allSpellData);

    console.log('Finished writing spells');
}