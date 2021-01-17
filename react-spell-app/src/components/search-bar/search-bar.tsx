import React, { useState } from 'react';
import './search-bar.scss';
import { ISearchTerm } from '../../models/prop-interfaces/search-term.interface';

const SearchBar = function ({ onQueryChange }: ISearchTerm): JSX.Element | null {
    const [searchTerm, setSearchTerm] = useState("");

    const onSearchTermChangeHandler = function (event: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value);
        onQueryChange(event.target.value);
        console.log("The search term is now " + searchTerm);
    }

    return (
        <div className="search-box">
            <input type="text" placeholder="Search spells..." value={searchTerm} onChange={onSearchTermChangeHandler} />
        </div>
    );
}

export default SearchBar;