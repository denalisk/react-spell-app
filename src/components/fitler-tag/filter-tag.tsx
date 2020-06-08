import React from 'react';
import './filter-tag.scss';
import { ISelectTag } from '../../models/prop-interfaces/select-tag.interface';
import { RemoveCircle } from '../icons/icons';
import { Color } from '../../scss/variables';

const FilterTag = function ({ filter, onTagClicked }: ISelectTag): JSX.Element | null {
    const onTagClickedHandler = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        onTagClicked(filter);
    }
    return (
        <div onClick={onTagClickedHandler} className="filter-tag">
            <span>{filter.displayName}</span>
            <RemoveCircle color={Color.Light}></RemoveCircle>
        </div>
    );
}

export default FilterTag;