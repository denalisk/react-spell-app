import React, { Fragment, useState, useEffect } from 'react';
import './spell-book.scss';
import SpellItem from '../spell-item/spell-item';
import { getSpells } from '../../services/spell.service';
import Spell from '../../models/spell.interface';
import SearchBar from '../search-bar/search-bar';
import useSpellFilter from '../../hooks/use-spell-filter.hook';
import SpellFilter from '../spell-filter/spell-filter';
import { getFilterGroups } from '../../services/filter.service';
import { IFilterGroup } from '../../models/prop-interfaces/spell-filter.interface';
import useGlobalQuery from '../../hooks/global-query.hook';
import ISpellBook from '../../models/prop-interfaces/spell-book.interface';

function SpellBook({spells, filterGroups}: ISpellBook) {
    const [globalQuery, globalFilterManager ] = useGlobalQuery();
    
    const currentSpells = useSpellFilter(globalQuery, spells);

    

    function queryStringChangeHandler(newQuery: string) {
        globalFilterManager.queryStringChanged(newQuery);
    }

    const generateSpellItem = (spell: Spell) => (
        // Apply filtering here
        <Fragment key={spell.id}>
            <div className="spell-item">
                <SpellItem spell={spell} key={spell.id} />
            </div>
        </Fragment>
    );

    return (
        <div>
            <h1>Tome</h1>
            <SearchBar onQueryChange={queryStringChangeHandler}></SearchBar>
            <SpellFilter filterGroups={filterGroups}></SpellFilter>
            {currentSpells.map(generateSpellItem)}
        </div>
    );
}

export default SpellBook;
