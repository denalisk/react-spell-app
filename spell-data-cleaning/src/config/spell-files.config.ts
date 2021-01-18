import IDataFileConfiguration from "../models/data-file.configuration";

export const masterOutput: IDataFileConfiguration = {
    sourceFileName: '',
    destinationFileName: 'E:\\Code\\spellAppReact\\spell-data-cleaning\\src\\data\\all-spells-mapped.json'
}

export const xGEFileConfig: IDataFileConfiguration = {
    sourceFileName: 'E:\\Code\\spellAppReact\\spell-data-cleaning\\src\\data\\xge-spells.json',
    destinationFileName: 'E:\\Code\\spellAppReact\\spell-data-cleaning\\src\\data\\xge-spells-mapped.json'
}

export const tCOEFileConfig: IDataFileConfiguration = {
    sourceFileName: 'E:\\Code\\spellAppReact\\spell-data-cleaning\\src\\data\\tcoe-spells.json',
    destinationFileName: 'E:\\Code\\spellAppReact\\spell-data-cleaning\\src\\data\\tcoe-spells-mapped.json'
}

export const pHBFileConfig: IDataFileConfiguration = {
    sourceFileName: 'E:\\Code\\spellAppReact\\spell-data-cleaning\\src\\data\\phb-spells.json',
    destinationFileName: 'E:\\Code\\spellAppReact\\spell-data-cleaning\\src\\data\\phb-spells-mapped.json'
}

export const allFileConfigs: IDataFileConfiguration[] = [
    xGEFileConfig,
    pHBFileConfig,
    tCOEFileConfig
]