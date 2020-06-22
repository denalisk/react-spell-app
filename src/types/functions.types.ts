import { IFilterFacet } from "../models/filter-facet.interface";

export type FilterInputFunction = (f: IFilterFacet) => void;
export type StringFunction = (s: string) => void;
export type NumberFunction = (n: number) => void;