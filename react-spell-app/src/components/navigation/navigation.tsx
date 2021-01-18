import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useGlobalQuery from '../../hooks/global-query.hook';
import './navigation.scss';

export default function NavBar() {
    const [globalQuery, globalFilterManager] = useGlobalQuery();

    function queryStringOnNavigationHandler() {
        // globalFilterManager.queryStringChanged('');
        globalFilterManager.resetQuery();
    }
    
    return (
        <nav className="navigation-bar">
            <div className="nav-item">
                <Link onClick={queryStringOnNavigationHandler} to="/">All spells</Link>
            </div>
            <div className="nav-item">
                <Link onClick={queryStringOnNavigationHandler} to="/my">Saved spells</Link>
            </div>
        </nav>
    )
}