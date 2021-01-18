import Spell from "../../../react-spell-app/src/models/spell.interface"

type MapperFunc<T> = (preSpell: T) => Spell;

export default interface ISpellMapper<T> {
    map: MapperFunc<T>;
}