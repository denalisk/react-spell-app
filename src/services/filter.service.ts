import data from "../../data/filters.json";
import { IFilterFacet } from "../models/filter-facet.interface";

export function getFilterGroups(): Promise<IFilterFacet[][]> {
    return Promise.resolve<IFilterFacet[][]>(data.filterGroups);
}