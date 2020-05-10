import React, { Fragment, useState, useEffect } from 'react';
import './spell-book.scss';
import SpellItem from '../spell-item/spell-item';
import { getSpells } from '../../services/spell.service';
import Spell from '../../models/spell.interface';
import SearchBar from '../search-bar/search-bar';
import useSpellFilter from '../../hooks/use-spell-filter.hook';
import { ISpellQuery } from '../../models/spell-query.interface';
import { IFilterFacet } from '../../models/filter-facet.interface';
import useFilterManager from '../../hooks/use-filter-manager.hook';

function SpellBook() {
    const [spells, setSpells] = useState<Spell[]>([]);
    const [spellQuery, setSpellQuery] = useState<ISpellQuery>({ filters: [], query: '' });
    const currentSpells = useSpellFilter(spellQuery, spells);


    useEffect(() => {
        getSpells().then(spells => {
            setSpells(spells);
        })
    }, []);

    function queryStringChangeHandler(newQuery: string) {
        setSpellQuery({ filters: [], query: newQuery });
    }

    function selectedFiltersChangeHandler(newFilters: IFilterFacet[]) {
        setSpellQuery({ filters: newFilters, query: '' });
    }


    const generateSpellItem = (spell: Spell) => (
        // Apply filtering here
        <Fragment key={spell.id}>
            <div className="spell-item">
                <SpellItem spell={spell} key={spell.id} />
            </div>
        </Fragment>
    )

    return (
        <div>
            <h1>Tome</h1>
            <SearchBar onQueryChange={queryStringChangeHandler}></SearchBar>
            {currentSpells.map(generateSpellItem)}
        </div>
    );
}

export default SpellBook;
