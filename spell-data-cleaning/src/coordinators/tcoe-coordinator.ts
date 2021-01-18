import { tCOEFileConfig } from "../config/spell-files.config";
import { TCOEMapper } from "../mappers/tcoe-clean";
import IPreSpell1Data from "../models/pre-spell-data.interface";
import ISpellData from "../models/spell-data.interface";
import { FileService } from "../services/file.service";

export default async function runTCOEMapper() {
    const config = tCOEFileConfig;
    const fileService = new FileService();
    const mapper = new TCOEMapper();

    const readData = await fileService.read<IPreSpell1Data>(config.sourceFileName);

    const mappedSpells = readData.spells.map((preSpell) => mapper.map(preSpell));

    const toSaveData: ISpellData = { spells: mappedSpells };

    await fileService.save(config.destinationFileName, toSaveData);

    console.log('Completed mapping TCOE spells');
}