import { IFilterFacet } from "../filter-facet.interface";

export interface ISpellFilter {
    filterGroups: IFilterGroup[],
}

export interface IFilterRow {
    filters: IFilterFacet[]
}

export interface IFilterGroup {
    propertyName: string,
    propertyDisplayName: string,
    filters: IFilterFacet[]
}