import React, { Fragment, useState } from 'react';
import './spell-filter.scss';
import { ISpellFilter, IFilterGroup } from '../../models/prop-interfaces/spell-filter.interface';
import { IFilterFacet } from '../../models/filter-facet.interface';
import useGlobalFilters from '../../hooks/global-query.hook';
import { UpChevronSvg, DownChevronSvg } from '../icons/icons';
import FilterTag from '../fitler-tag/filter-tag';
import { Color } from '../../scss/variables';
import SelectableFilterTag from '../fitler-tag/selectable-filter-tag';

const SpellFilter = function ({ filterGroups }: ISpellFilter): JSX.Element | null {
    const [spellQuery, globalFilterManager] = useGlobalFilters();
    const [filterDisplayOpen, setFilterDisplayOpen] = useState(false);

    if (filterGroups == null) {
        return null;
    }

    const toggleFilterDisplayHandler = (): void => {
        setFilterDisplayOpen(currentValue => !currentValue);
    }

    const resetQueryHandler = (): void => {
        globalFilterManager.resetQuery();
    }

    const toggleFilter = (filter: IFilterFacet) => {
        globalFilterManager.toggleFilter(filter);
    }

    const chevronState = () => {
        if (filterDisplayOpen) {
           return (<UpChevronSvg color={Color.Black}></UpChevronSvg>);
        } else {
            return (<DownChevronSvg color={Color.Black}></DownChevronSvg>);
        }
    }

    const selectedFilters = () => {
        if (spellQuery.filters.length) {
            return (
                <Fragment>
                    {selectedFiltersMap(spellQuery.filters)}
                    <button className="clear-filters" onClick={resetQueryHandler}>Clear filters</button>
                </Fragment>
            );
        }
        else  {
            return (<span className="empty-filters">no filters selected</span>);
        }
    }

    const selectedFiltersMap = (filters: IFilterFacet[]) => {
        return filters.map(filter => {
            return (
            <FilterTag key={filter.displayName} filter={filter} onTagClicked={(toggledFilter) => toggleFilter(toggledFilter)}></FilterTag>
            );
        });
    }

    const filterDropdownDisplay = () => {
        if (filterDisplayOpen) {
            return filterGroups.map(group => {
                return (<div key={group.propertyName} className="filter-group">
                    {mapFiltersGroup(group)}
                </div>)                
            });
        } else {
            return null;
        }
    }

    const mapFiltersGroup = (filterGroup: IFilterGroup) => {
        return filterGroup.filters.map(filter => {
            return (
                <Fragment key={filter.propertyValue}>
                    <SelectableFilterTag filter={filter} onTagClicked={() => toggleFilter(filter)}></SelectableFilterTag>
                </Fragment>
            );
        });
    }

    return (
        <Fragment>
            <section className="filter-section">
                <div className="filters-header" onClick={toggleFilterDisplayHandler}>
                    <div className="header-text">
                        {chevronState()}
                        <span>Filters:</span>
                    </div>
                    {selectedFilters()}
                </div>
                <div className={filterDisplayOpen ? "filter-dropdown dropdown-open" : "filter-dropdown"}>
                    {filterDropdownDisplay()}
                </div>
            </section>
        </Fragment>
    );
}

export default SpellFilter;