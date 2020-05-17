import React, { Fragment, useState } from 'react';
import './spell-filter.scss';
import { ISpellFilter, IFilterGroup, IFilterRow } from '../../models/prop-interfaces/spell-filter.interface';
import { IFilterFacet } from '../../models/filter-facet.interface';
import { ISelectTag } from '../../models/prop-interfaces/select-tag.interface';
import { ISpellQuery } from '../../models/spell-query.interface';
import useGlobalFilters from '../../hooks/global-filters.hook';
import data from '../../data/filters.json'

const SpellFilter = function ({ filterGroups }: ISpellFilter): JSX.Element | null {
    const [spellFilters, addFilter, removeFilter] = useGlobalFilters();

    if (filterGroups == null) {
        return null;
    }

    const toggleFilter = (filter: IFilterFacet) => {
        console.log('Toggling filter: ', filter);
        filter.selected = !filter.selected;
        if (filter.selected) {
            addFilter(filter);
        } else {
            removeFilter(filter);
        }
    }

    return (
        <Fragment>
            {filterGroups.map(group => {
                return group.filters.map(filter => {
                    return (
                        <div key={filter.propertyValue} className={`select-tag${filter.selected ? " highlight" : ""}`} onClick={() => toggleFilter(filter)}>
                            {filter.displayName}
                        </div>
                    );
                })
            })}
            {
                spellFilters.map(filter => {
                    return (
                        <div key={filter.propertyValue}>{filter.displayName}</div>
                    );
                })
            }
        </Fragment>
    );
}
 
export default SpellFilter;