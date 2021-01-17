import { IFilterFacet } from "../models/filter-facet.interface";
import { useState, useEffect } from "react";
import { BehaviorSubject} from 'rxjs';
import { ISpellQuery } from "../models/spell-query.interface";
import IGlobalQueryManger from "../models/global-query-manager.interface";

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

function queryStringChanged(newQueryString: string): void {
    const currentQuery = queryBehaviorSubject.getValue();
    internalSetState({ filters: [...currentQuery.filters], query: newQueryString });
}

function resetQuery(): void {
    const currentQuery = queryBehaviorSubject.getValue();
    currentQuery.filters.forEach(filter => filter.selected = false);
    internalSetState({filters: [], query: ''});
}

function useGlobalQuery(): [ISpellQuery, IGlobalQueryManger] {
    const newListener = useState<ISpellQuery>()[1];
    useEffect(() => {
        const querySubscription = queryBehaviorSubject.subscribe(query => newListener(query));

        return () => {
            if (!querySubscription.closed) {
                querySubscription.unsubscribe();
            }
        }
    }, [newListener]);

    return [queryBehaviorSubject.getValue(), { toggleFilter, queryStringChanged, resetQuery }];
}

export default useGlobalQuery;
