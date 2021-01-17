import { IFilterFacet } from "./filter-facet.interface";
import { FilterInputFunction, StringFunction } from "../types/functions.types";

interface IGlobalQueryManger {
    toggleFilter: FilterInputFunction;
    queryStringChanged: StringFunction;
    resetQuery: Function;
}

export default IGlobalQueryManger;