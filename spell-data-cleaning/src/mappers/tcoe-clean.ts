import Spell from "../../../react-spell-app/src/models/spell.interface";
import { PreSpell1Mapper } from "./prespell-one-clean";

const source = 'tcoe';

export class TCOEMapper extends PreSpell1Mapper {
    constructor() {
        super(source);
    }
}

export function spellDataMapper(sourceField: string, mapper: Function, targetSpell: Spell) {

}