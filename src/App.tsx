import React, { useState, useEffect } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import SpellBook from './components/spell-book/spell-book';
import Spell from './models/spell.interface';
import { IFilterGroup } from './models/prop-interfaces/spell-filter.interface';
import { getSpells } from './services/spell.service';
import { getFilterGroups } from './services/filter.service';

function App() {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [savedSpells, setSavedSpells] = useState<Spell[]>([]);
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
      <Switch>
        <Route path="/my">
          <SpellBook spells={spells} filterGroups={filterGroups}></SpellBook>
        </Route>
        <Route path="/">
          <SpellBook spells={spells} filterGroups={filterGroups}></SpellBook>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
