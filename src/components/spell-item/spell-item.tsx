import React, { Fragment, useState } from 'react';
import './spell-item.scss';
import { levelTextConvert, schoolLevelText } from '../../services/display-text.service';
import { ISpellItem } from '../../models/prop-interfaces/spell-item.interface';
import SpellProperty from '../spell-property/spell-property';
import { Bookmark } from '../icons/icons';
import { Color } from '../../scss/variables';
import useGlobalBookmarks from '../../hooks/global-bookmark.hook';

const SpellItem = function({ spell }: ISpellItem): JSX.Element {
    const [isExpanded, toggleIsExpanded] = useState(false);
    const [isSpellSaved, addSavedSpell, clearSavedSpell] = useGlobalBookmarks(spell.id);

    const handleToggleIsExpanded = () => {
        toggleIsExpanded(i => !i);
    }

    const handleToggleSpellSaved = () => {
        if (isSpellSaved) {
            clearSavedSpell(spell.id);
        } else {
            addSavedSpell(spell.id);
        }
    }

    const buildClassTag = (spellClass: string) => {
        return (
            <div key={spellClass} className="class-tag">{spellClass}</div>
        );
    }

    const returnExpansionState = (): JSX.Element => {
        if (!isExpanded) {
            return (
                <div className="minified-spell-element" onClick={handleToggleIsExpanded}>
                    <div className="content-wrapper">
                        <div className="level-text">
                            <strong>{levelTextConvert(spell.level)}</strong>
                        </div>
                        <div className="spell-name-text">
                            <strong>{spell.name}</strong>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="expanded-spell-element">
                    <div className="title-line-container">
                        <h2 onClick={handleToggleIsExpanded} >
                            <strong>{spell.name}</strong>
                        </h2>
                        <div className={isSpellSaved ? "spell-control-container selected" : "spell-control-container"} onClick={handleToggleSpellSaved}>
                            <Bookmark color={Color.Dark}></Bookmark>
                        </div>
                    </div>
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
                        <strong>Description:</strong>
                        <SpellProperty value={spell.description} displayText="" hasHtml={true} />
                        <SpellProperty value={spell.higherLevel} displayText="" hasHtml={true} />
                    </div>
                    <SpellProperty value={spell.page} displayText="Source" hasHtml={false}/>
                    <div className="classes-container">
                        <span><strong>Classes:</strong></span>
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