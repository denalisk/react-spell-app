import { xGEFileConfig } from "../config/spell-files.config";
import { XGEMapper } from "../mappers/xge-clean";
import ISpellData from "../models/spell-data.interface";
import XGESpell from "../models/xge-spell.interface";
import { FileService } from "../services/file.service";

interface IXGEPreSpellData {
    spells: XGESpell[];
}

export default async function runXGEMapper() {
    const config = xGEFileConfig;
    const fileService = new FileService(xGEFileConfig);
    const mapper = new XGEMapper();

    const readData = await fileService.read<IXGEPreSpellData>();

    const mappedSpells = readData.spells.map((preSpell) => mapper.map(preSpell));

    const toSaveData: ISpellData = { spells: mappedSpells };

    await fileService.save(toSaveData);

    console.log('Completed');
}