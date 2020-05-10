import React, { Fragment, useState } from 'react';
import './spell-filter.scss';
import { ISpellFilter } from '../../models/prop-interfaces/spell-filter.interface';
import { IFilterFacet } from '../../models/filter-facet.interface';
import { ISelectTag } from '../../models/prop-interfaces/select-tag.interface';
import { ISpellQuery } from '../../models/spell-query.interface';
import useFilterManager from '../../hooks/use-filter-manager.hook';

const SpellFilter = function ({ filterGroups }: ISpellFilter): JSX.Element | null {
    const [spellFilters, addFilter, removeFilter] = useFilterManager()

    if (filterGroups == null) {
        return null;
    }



    return (
        <div>
            
        </div>
    );
}

const FilterRow = function ({ filterGroup }: IFilterGroup): JSX.Element | null {
    

    return null;
}

const SelectTag = function ({ filter, selected, onTagClicked }: ISelectTag): JSX.Element | null {
    const clickHandler = () => {
        onTagClicked(!selected);
    }

    return (
        <div className={`select-tag${selected ? " highlight" : ""}`} onClick={clickHandler}>
            { filter.displayName }
        </div>
    );
}


 
export default SpellFilter;