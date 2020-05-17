import Spell from "../models/spell.interface";
import data from "../data/spells.json";

/**
 * always sort spells by level and then alphabetically
 */
function sortSpells(spells: Spell[]): Spell[] {
    console.log("Sorting");
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
    return Promise.resolve<Spell[]>(data.spells)
        .then(spells => sortSpells(spells));
}

