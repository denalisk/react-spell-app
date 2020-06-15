import { IFilterFacet } from "../models/filter-facet.interface";
import { useState, useEffect } from "react";
import { BehaviorSubject} from 'rxjs';
import { ISpellQuery } from "../models/spell-query.interface";
import { getSavedSpells, saveSpell, clearSpell } from "../services/spell.service";

const savedSpellBehaviorSubject = new BehaviorSubject<number[]>([]);

function internalSetState(newSpellIds: number[]): void {
    savedSpellBehaviorSubject.next(newSpellIds);
}

function addSavedSpell(spellId: number): void {
    internalSetState(saveSpell(spellId));
}

function clearSavedSpell(spellId: number): void {
    internalSetState(clearSpell(spellId));
}

function useGlobalBookmarks(spellId: number): [boolean, Function, Function] {
    const newListener = useState<boolean>()[1];
    useEffect(() => {
        const querySubscription = savedSpellBehaviorSubject.subscribe(spellIds => newListener(spellIds.includes(spellId)));

        return () => {
            if (!querySubscription.closed) {
                querySubscription.unsubscribe();
            }
        }
    }, [newListener]);

    useEffect(() => {
        const initialSavedSpells = getSavedSpells();
        internalSetState(initialSavedSpells);
    }, []);

    return [savedSpellBehaviorSubject.getValue().includes(spellId), addSavedSpell, clearSavedSpell];
}

export default useGlobalBookmarks;