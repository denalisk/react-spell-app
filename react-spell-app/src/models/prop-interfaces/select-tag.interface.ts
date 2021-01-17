import { IFilterFacet } from "../filter-facet.interface";

export interface ISelectTag {
    filter: IFilterFacet,
    onTagClicked(toggleFilter: IFilterFacet): void
}