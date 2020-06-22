import Spell from "../models/spell.interface";
import data from "../data/spells.json";

/**
 * sort spells by level and then alphabetically
 */
export function sortSpells(spells: Spell[]): Spell[] {
    return spells.sort((spellA, spellB) => {
        if (spellA.level - spellB.level === 0) {
            const nameA = spellA.name.toUpperCase();
            const nameB = spellB.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            } else if (nameA > nameB) {
                return 1;
            } else {
                return 0;
            }
        } else {
            return spellA.level - spellB.level;
        }
    })
}

export function getSpells(): Promise<Spell[]> {
    return Promise.resolve<Spell[]>(data.spells);
}

const savedSpellsLocalStorageName = "TOME-savedspell-ids"

export function saveSpell(spellId: number): number[] {
    const currentSavedSpellIds = getSavedSpells();
    const newSavedSpellids = [spellId, ...currentSavedSpellIds];
    setSavedSpells(newSavedSpellids);
    return newSavedSpellids;
}

export function clearSpell(spellId: number): number[] {
    const currentSavedSpellIds = getSavedSpells();
    const newSavedSpellIds = currentSavedSpellIds.filter(x => x !== spellId);
    setSavedSpells(newSavedSpellIds);
    return newSavedSpellIds;
}

export function getSavedSpells(): number[] {
    const currentSavedSpells = window.localStorage.getItem(savedSpellsLocalStorageName);
    return currentSavedSpells ? JSON.parse(currentSavedSpells) : [];
}

function setSavedSpells(spellIds: number[]): void {
    const spellIdsJson = JSON.stringify(spellIds);
    window.localStorage.setItem(savedSpellsLocalStorageName, spellIdsJson);
}

