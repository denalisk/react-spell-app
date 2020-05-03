import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './spell-item.css';
import Spell from '../../models/spell.interface';
import { levelTextConvert, schoolLevelText } from '../../services/display-text.service';
import { ISpellItem } from '../../models/prop-interfaces/spell-item.interface';
import SpellProperty from '../spell-property/spell-property';

const SpellItem = function({ spell }: ISpellItem): JSX.Element {
    const [isExpanded, toggleIsExpanded] = useState(false);

    const handleToggleIsExpanded = () => {
        toggleIsExpanded(i => !i);
    }

    const buildClassTag = (spellClass: string) => {
        return (
            <div>{spellClass}</div>
        );
    }

    const returnExpansionState = (): JSX.Element => {
        if (!isExpanded) {
            return (
                <div className="minified-spell-element" onClick={handleToggleIsExpanded}>
                    <div className="level-text">
                        <strong>{levelTextConvert(spell.level)}</strong>
                    </div>
                    <div>
                        <strong>{spell.name}</strong>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="expanded-spell-element">
                    <h2 onClick={ handleToggleIsExpanded } >
                        <strong>{spell.name}</strong>
                    </h2>
                    <div>
                        <strong>{schoolLevelText(spell.level, spell.school)}</strong>
                    </div>
                    <SpellProperty value={spell.range} displayText="Range" hasHtml={false} />
                    <SpellProperty value={spell.castingTime} displayText="Casting time" hasHtml={false} />
                    <SpellProperty value={spell.duration} displayText="Duration" hasHtml={false} />
                    <SpellProperty value={spell.concentration} displayText="Concentration" hasHtml={false} />
                    <SpellProperty value={spell.components} displayText="Components" hasHtml={false} />
                    <SpellProperty value={spell.material} displayText="Materials" hasHtml={false} />
                    <SpellProperty value={spell.ritual} displayText="Ritual" hasHtml={false} />
                    <div className="description">
                        <SpellProperty value={spell.description} displayText="" hasHtml={true} />
                        <SpellProperty value={spell.higherLevel} displayText="" hasHtml={true} />
                    </div>
                    <SpellProperty value={spell.page} displayText="Source" hasHtml={false}/>
                    <div>
                        <strong>Classes:</strong>
                        {spell.class.map(buildClassTag)}
                    </div>
                </div>
            )
        }
    }

    return (
        <Fragment>
            { returnExpansionState() }
        </Fragment>
  );
}

export default SpellItem;