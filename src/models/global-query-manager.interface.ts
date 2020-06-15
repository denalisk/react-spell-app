import { IFilterFacet } from "./filter-facet.interface";

interface IGlobalQueryManger {
    toggleFilter: FilterInputFunction;
    queryStringChanged: StringFunction;
    resetQuery: Function;
}

type FilterInputFunction = (f: IFilterFacet) => void;
type StringFunction = (s: string) => void;

export default IGlobalQueryManger;