import Spell from "../spell.interface";
import { IFilterGroup } from "./spell-filter.interface";

interface ISpellBook {
    spells: Spell[];
    filterGroups: IFilterGroup[];
}

export default ISpellBook;