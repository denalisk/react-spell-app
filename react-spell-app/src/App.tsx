import React, { useState, useEffect, Fragment } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SpellBook from './components/spell-book/spell-book';
import NavBar from './components/navigation/navigation';
import SavedSpellBook from './components/spell-book-saved/spell-book-saved';
import Spell from './models/spell.interface';
import { IFilterGroup } from './models/prop-interfaces/spell-filter.interface';
import { getSpells } from './services/spell.service';
import { getFilterGroups } from './services/filter.service';
import useSavedSpells from './hooks/saved-spells.hook';

function App() {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [filterGroups, setFilterGroups] = useState<IFilterGroup[]>([]);

  useEffect(() => {
    getSpells().then(spells => {
      setSpells(spells);
    })
  }, []);

  useEffect(() => {
    getFilterGroups().then(filterGroups => {
      setFilterGroups(filterGroups);
    })
  }, []);

  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/my">
          <SavedSpellBook spells={spells} filterGroups={filterGroups}></SavedSpellBook>
        </Route>
        <Route path="/">
          <SpellBook spells={spells} filterGroups={filterGroups}></SpellBook>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
