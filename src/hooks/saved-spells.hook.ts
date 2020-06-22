import Spell from "../models/spell.interface";
import { useGlobalBookmarks } from "./global-bookmark.hook";
import { useEffect, useState } from "react";

export default function useSavedSpells(allSpells: Spell[]): Spell[] {
    const spellIds = useGlobalBookmarks(allSpells);
    const [savedSpells, setSavedSpells] = useState<Array<Spell>>([]);

    useEffect(() => {
        setSavedSpells(allSpells.filter(spell => spellIds.includes(spell.id)));
    }, [spellIds, allSpells]);

    return savedSpells;
}