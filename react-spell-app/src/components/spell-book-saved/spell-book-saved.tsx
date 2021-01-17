import React, { Fragment } from 'react';
import './spell-book-saved.scss';
import SpellItem from '../spell-item/spell-item';
import Spell from '../../models/spell.interface';
import SearchBar from '../search-bar/search-bar';
import useSpellFilter from '../../hooks/use-spell-filter.hook';
import SpellFilter from '../spell-filter/spell-filter';
import useGlobalQuery from '../../hooks/global-query.hook';
import ISpellBook from '../../models/prop-interfaces/spell-book.interface';
import useSavedSpells from '../../hooks/saved-spells.hook';
import useSpellSort from '../../hooks/spell-sort.hook';

function SavedSpellBook({ spells, filterGroups }: ISpellBook) {
    const [globalQuery, globalFilterManager] = useGlobalQuery();
    const savedSpells = useSavedSpells(spells);
    const sortedSpells = useSpellSort(savedSpells);
    const currentSpells = useSpellFilter(globalQuery, sortedSpells);

    function queryStringChangeHandler(newQuery: string) {
        globalFilterManager.queryStringChanged(newQuery);
    }

    const generateSpellItem = (spell: Spell) => {
        // console.log('Generating spell item', spell);
        return (
            <Fragment key={spell.id}>
                <div className="spell-item">
                    <SpellItem spell={spell} key={spell.id} />
                </div>
            </Fragment>
        );
    }

    return (
        <div>
            <h1>Saved spells</h1>
            <SearchBar onQueryChange={queryStringChangeHandler}></SearchBar>
            <SpellFilter filterGroups={filterGroups}></SpellFilter>
            {currentSpells.map(generateSpellItem)}
        </div>
    );
}

export default SavedSpellBook;
