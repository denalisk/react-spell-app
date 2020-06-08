import { IFilterFacet } from "../models/filter-facet.interface";
import { useState, useEffect } from "react";
import { BehaviorSubject} from 'rxjs';
import { ISpellQuery } from "../models/spell-query.interface";

const queryBehaviorSubject = new BehaviorSubject<ISpellQuery>({filters: [], query: ''});

function internalSetState(newQuery: ISpellQuery): void {
    queryBehaviorSubject.next(newQuery);
}

function toggleFilter(targetFilter: IFilterFacet): void {
    const currentQuery = queryBehaviorSubject.getValue();
    targetFilter.selected = !targetFilter.selected;
    if (targetFilter.selected) {
        // Add the filter
        internalSetState({filters: [...currentQuery.filters, targetFilter], query: currentQuery.query});
    } else {
        // Remove the filter
        internalSetState({ filters: currentQuery.filters.filter(x => x !== targetFilter), query: currentQuery.query });
    }
}

function queryStringChange(newQueryString: string): void {
    const currentQuery = queryBehaviorSubject.getValue();
    internalSetState({ filters: [...currentQuery.filters], query: newQueryString });
}

// function addFilter(newFilter: IFilterFacet): void {
//     internalSetState([ ...queryBehaviorSubject.getValue(), newFilter ]);
// }

// function removeFilter(targetFilter: IFilterFacet): void {
//     internalSetState(queryBehaviorSubject.getValue().filter(x => x !== targetFilter));
// }

function useGlobalQuery(): [ISpellQuery, Function, Function] {
    const newListener = useState<ISpellQuery>()[1];
    useEffect(() => {
        const querySubscription = queryBehaviorSubject.subscribe(query => newListener(query));

        return () => {
            if (!querySubscription.closed) {
                querySubscription.unsubscribe();
            }
        }
    }, [newListener]);

    return [queryBehaviorSubject.getValue(), toggleFilter, queryStringChange];
}

export default useGlobalQuery;