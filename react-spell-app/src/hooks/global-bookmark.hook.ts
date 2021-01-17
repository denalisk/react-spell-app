import { useState, useEffect } from "react";
import { BehaviorSubject} from 'rxjs';
import { getSavedSpells, saveSpell, clearSpell } from "../services/spell.service";
import IGlobalBookmarkManger from "../models/global-bookmark-manage.interface";
import Spell from "../models/spell.interface";

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

export function useGlobalBookmarks(spells: Spell[]): number[] {
    const [savedSpells, setSavedSpells] = useState<Array<number>>([]);

    useEffect(() => {
        const bookmarkSubscription = savedSpellBehaviorSubject.subscribe(spellIds => setSavedSpells(spellIds));

        return () => {
            if (!bookmarkSubscription.closed) {
                bookmarkSubscription.unsubscribe();
            }
        }
    }, [setSavedSpells]);

    useEffect(() => {
        const initialSavedSpells = getSavedSpells();
        internalSetState(initialSavedSpells);
    }, []);

    return savedSpells;
}

export function useGlobalSpellSave(spellId: number): [boolean, IGlobalBookmarkManger] {
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

    return [
        savedSpellBehaviorSubject.getValue().includes(spellId), 
        { 
            saveSpell: addSavedSpell, 
            clearSpell: clearSavedSpell 
        }];
}