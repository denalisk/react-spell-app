import { IFilterFacet } from "../models/filter-facet.interface";
import { useState, useEffect } from "react";
import { BehaviorSubject} from 'rxjs';

const filterBehaviorSubject = new BehaviorSubject<IFilterFacet[]>(new Array<IFilterFacet>());

function internalSetState(newFilters: IFilterFacet[]): void {
    filterBehaviorSubject.next(newFilters);
}

function addFilter(newFilter: IFilterFacet): void {
    internalSetState([ ...filterBehaviorSubject.getValue(), newFilter ]);
}

function removeFilter(targetFilter: IFilterFacet): void {
    internalSetState(filterBehaviorSubject.getValue().filter(x => x !== targetFilter));
}

function useGlobalFilters(): [IFilterFacet[], Function, Function] {
    const newListener = useState<IFilterFacet[]>()[1];
    useEffect(() => {
        const filterSubscription = filterBehaviorSubject.subscribe(filters => newListener(filters));

        return () => {
            if (!filterSubscription.closed) {
                filterSubscription.unsubscribe();
            }
        }
    }, []);

    return [filterBehaviorSubject.getValue(), addFilter, removeFilter];
}

export default useGlobalFilters;