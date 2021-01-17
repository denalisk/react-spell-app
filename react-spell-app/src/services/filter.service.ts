import data from "../data/filters.json";
import { IFilterGroup } from "../models/prop-interfaces/spell-filter.interface";

export function getFilterGroups(): Promise<IFilterGroup[]> {
    return Promise.resolve<IFilterGroup[]>(data.filterGroups);
}