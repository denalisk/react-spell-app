import React from 'react';
import './filter-tag.scss';
import { ISelectTag } from '../../models/prop-interfaces/select-tag.interface';

const SelectableFilterTag = function ({ filter, onTagClicked }: ISelectTag): JSX.Element | null {
    const onTagClickedHandler = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        onTagClicked(filter);
    }

    return (
        <div onClick={onTagClickedHandler} className={`filter-tag select-tag${filter.selected ? " highlight" : ""}`}>
            <span>{filter.displayName}</span>
        </div>
    );
}

export default SelectableFilterTag;