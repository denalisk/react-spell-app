import React, { useState } from 'react';
import './search-bar.scss';
import { ISearchTerm } from '../../models/prop-interfaces/search-term.interface';
import { Color } from '../../scss/variables';
import { RemoveBox } from '../icons/icons';

const SearchBar = function ({ onQueryChange }: ISearchTerm): JSX.Element | null {
    const [searchTerm, setSearchTerm] = useState('');

    const onSearchTermChangeHandler = function (event: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value);
        onQueryChange(event.target.value);
    }

    const onClearSearchTermHandler = () => {
        setSearchTerm('');
        onQueryChange('');
    }

    return (
        <div className="search-box">
            <input type="text" placeholder="Search spells..." value={searchTerm} onChange={onSearchTermChangeHandler} />
            <div className="icon-container" onClick={onClearSearchTermHandler}>
                <RemoveBox color={Color.Dark}></RemoveBox>
            </div>
        </div>
    );
}

export default SearchBar;