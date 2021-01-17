import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

export default function NavBar() {
    return (
        <nav className="navigation-bar">
            <div className="nav-item">
                <Link to="/">All spells</Link>
            </div>
            <div className="nav-item">
                <Link to="/my">Saved spells</Link>
            </div>
        </nav>
    )
}