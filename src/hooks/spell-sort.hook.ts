import { useState, useEffect } from "react";
import Spell from "../models/spell.interface";
import { sortSpells } from "../services/spell.service";

/**
 * returns stateful spells that are sorted by level and then alphabetically
 * @param spells the base spells to sort
 */
export default function useSpellSort(spells: Spell[]) {
    const [sortedSpells, setSortedSpells] = useState<Array<Spell>>(spells);

    useEffect(() => {
        setSortedSpells(sortSpells(spells));
    }, [spells])

    return sortedSpells;
}
