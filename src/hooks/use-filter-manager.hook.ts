import { IFilterFacet } from "../models/filter-facet.interface";
import { useState } from "react";

export default function useFilterManager(): [Observable<IFilterFacet[]>, Function, Function] {
    const [filters, setFilters] = useState<IFilterFacet[]>([]);

    function addFilter(filter: IFilterFacet) {
        setFilters(filters => [...filters, filter]);
    };

    function removeFilter(targetFilter: IFilterFacet) {
        setFilters(filters => filters.filter(filter => targetFilter.propertyValue === filter.propertyValue));
    };


    return [filters, addFilter, removeFilter];   
}