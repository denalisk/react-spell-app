import { xGEFileConfig } from "../config/spell-files.config";
import { XGEMapper } from "../mappers/xge-clean";
import IPreSpell1Data from "../models/pre-spell-data.interface";
import ISpellData from "../models/spell-data.interface";
import { FileService } from "../services/file.service";

export default async function runXGEMapper() {
    const config = xGEFileConfig;
    const fileService = new FileService();
    const mapper = new XGEMapper();

    const readData = await fileService.read<IPreSpell1Data>(config.sourceFileName);

    const mappedSpells = readData.spells.map((preSpell) => mapper.map(preSpell));

    const toSaveData: ISpellData = { spells: mappedSpells };

    await fileService.save(config.destinationFileName, toSaveData);

    console.log('Completed');
}