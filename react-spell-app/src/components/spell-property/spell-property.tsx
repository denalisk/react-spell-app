import React from 'react';
import { ISpellProperty } from "../../models/prop-interfaces/spell-property.interface";
import './spell-property.scss';

const SpellProperty = function ({ value, displayText, hasHtml }: ISpellProperty) {
    if (value == null) {
        return null;
    }

    if (hasHtml) {
        return (
            <div dangerouslySetInnerHTML={{ __html: value }} />
        )
    }

    return (
        <div>
            {displayText ? (<strong>{displayText}: </strong>) : null }{value}
        </div>
    )
}

export default SpellProperty;