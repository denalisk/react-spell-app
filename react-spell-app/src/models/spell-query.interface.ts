import { IFilterFacet } from "./filter-facet.interface";

export interface ISpellQuery {
    filters: IFilterFacet[],
    query: string
}