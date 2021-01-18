import { allFileConfigs, masterOutput } from "./config/spell-files.config";
import ISpellData from "./models/spell-data.interface";
import { FileService } from "./services/file.service";
import { basicHash } from "./utils/basic-hash";

export default async function aggregateSpells() {
    const masterOutputConfig = masterOutput;
    const allSpellConfig = allFileConfigs;

    const masterFileService = new FileService(masterOutputConfig);

    const allSpellLists = await Promise.all(allSpellConfig.map(config => {
        const fileService = new FileService(config);
        return fileService.read<ISpellData>();
    }));

    const allSpellData = allSpellLists.reduce<ISpellData>((aggregate, current) => {
        aggregate.spells = aggregate.spells.concat(current.spells);
        return aggregate;
    }, { spells: [] });

    console.log('Sorting spells');
    allSpellData.spells.sort((spell1, spell2) => {
        return spell1.name.toLowerCase() > spell2.name.toLowerCase() ? 1 
            : spell1.name.toLowerCase() < spell2.name.toLowerCase() ? -1 : 0;
    });

    console.log('Applying ids');
    allSpellData.spells = allSpellData.spells.map((currentSpell, i) => {
        currentSpell.id = basicHash(currentSpell.name);
        return currentSpell;
    });

    await masterFileService.save(allSpellData);

    console.log('Finished writing spells');
}