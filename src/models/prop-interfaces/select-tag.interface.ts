import { IFilterFacet } from "../filter-facet.interface";

export interface ISelectTag {
    filter: IFilterFacet,
    selected: boolean,
    onTagClicked(newSelected: boolean): void
}