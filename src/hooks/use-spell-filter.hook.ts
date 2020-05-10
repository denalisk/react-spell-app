import { useState, useEffect } from 'react';
import Spell from '../models/spell.interface';
import { IFilterFacet } from '../models/filter-facet.interface';
import { ISpellQuery } from '../models/spell-query.interface';

/**
 * filters the spells
 * @param spellQuery the search query to filter spells with
 * @param spells the list of spells to filter
 */
export default function useSpellFilter(spellQuery: ISpellQuery, spells: Spell[]): Spell[] {
    const [filteredSpells, setFilteredSpells] = useState<Spell[]>([]);

    useEffect(() => {
        if (spellQuery.query) {
            // If there is a search query, we just search through the spells for it
            // there just aren't enough spells to merit a filtered, queried search
            setFilteredSpells(searchSpells(spells, spellQuery.query))
        }
        else {
            // Otherwise, implement filtering
            setFilteredSpells(filterSpells(spells, spellQuery.filters))
        }
    }, [spellQuery, spells]);

    return filteredSpells;
}

/**
 * Naive search through the spells checking against the name
 * @param spells the spells to search through
 * @param searchQuery the query term to use
 */
function searchSpells(spells: Spell[], searchQuery: string): Spell[] {
    return spells
        .filter(spell => spell.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()));
}

/**
 * given an array of spells to filter from, returns only an array of 
 * spells that pass the given filters
 * @param spells the spells to filter
 * @param filters the filters to apply
 */
function filterSpells(spells: Spell[], filters: IFilterFacet[]): Spell[] {
    const filteredSpells: Spell[] = [];
    const filterGroups = groupFilters(filters);
    spells.forEach((spell: Spell) => {
        if (filterGroups.every(group => group.some(filter => {
            return filterSpell(filter, spell);
        }))) {
            filteredSpells.push(spell);
        }
    });
    return filteredSpells;
}

/**
 * Takes an array of filterfacets and groups them by property name, to
 * speed up filtering spells that fit under multiple filters, e.g. classes, level, etc
 * Filtergroups are inclusive within the group (a spell returns for a given filter
 * if it is of class 'warlock' or 'wizard' if both filters are selected) but 
 * exclusive between groups (if both warlock and level 3 are selected, returned spells will be both)
 * @param filters the array of filter facets to turn into groups
 */
function groupFilters(filters: IFilterFacet[]): IFilterFacet[][] {
    const filterGroups: IFilterFacet[][] = [];
    filters.forEach((filter: IFilterFacet) => {
        const groupIndex = filterGroups.findIndex(group => group[0].propertyName === filter.propertyName);
        if (groupIndex === -1) {
            filterGroups.push([filter]);
        } else {
            filterGroups[groupIndex].push(filter);
        }
    });
    return filterGroups;
}

/**
 * checks if the given spell is a valid candidate for the given filter
 * @param filter the filter to apply
 * @param spell the spell to check
 */
function filterSpell(filter: IFilterFacet, spell: Spell): boolean {
    switch (filter.propertyName) {
        case 'class': {
            return spell.class.includes(filter.propertyValue.toString());
        }
        case 'level': {
            return spell.level === filter.propertyValue;
        }
        case 'school': {
            return spell.school === filter.propertyValue;
        }
        default: {
            return false;
        }
    }
}