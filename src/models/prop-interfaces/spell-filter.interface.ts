import { IFilterFacet } from "../filter-facet.interface";

export interface ISpellFilter {
    filterGroups: IFilterFacet[][],
    onFiltersChanged(newFilters: IFilterFacet[][]): void
}

export interface IFilterGroup {
    filterGroup: IFilterFacet[]
}