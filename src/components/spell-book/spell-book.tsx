import React from 'react';
import './spell-book.css';
import SpellItem from '../spell-item/spell-item';
import { getSpells } from '../../services/spell.service';

function SpellBook() {
    return (
        <div>
            <h1>Spell App</h1>
            {getSpells().map(spell => <SpellItem spell={spell} key={spell.id} />)}
        </div>
    );
}

export default SpellBook;
