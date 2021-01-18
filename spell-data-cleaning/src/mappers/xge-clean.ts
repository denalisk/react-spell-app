import Spell from "../../../react-spell-app/src/models/spell.interface";
import XGESpell from "../models/xge-spell.interface";

export function importJsonSpellData() {
    // Grab file of spells to be imported
    // Read from json and create objects
    // map from objects to internal spell schema (maybe field by field?)
    // 
}

export class XGEMapper {
    public xantharsMapper(preSpell: XGESpell): Spell {
        const newSpell = {
            name: preSpell.Name,
            description: preSpell.Description,
            page: "xge",
            range: preSpell.Range,
            higherLevel: "",
            components: mapComponent(preSpell.Components)[0],
            id: number
            higherLevel?: string,
            page: string,
            range: string,
            components: string,
            material?: string,
            ritual: string,
            duration: string,
            concentration: string,
            archetype?: string[],
            castingTime: string,
            level: number,
            school: string,
            class: string[],
        };
        
        return newSpell;
    }

    public mapComponent = (componentString) => {
        const components = componentString.split('(');
        if (components.length = 2) {
            components[1].replace(")", "");
        }

        return components;
    }
}

export function xantharsMapper(preSpell: XGESpell): Spell {
    const newSpell = new Spell();
    newSpell.name = preSpell.Name;
    newSpell.description = preSpell.Description;
    newSpell.page = "xge";
    newSpell.range = preSpell.Range;
    newSpell.higherLevel = "";
    newSpell.components = mapComponent(preSpell.Components)[0];
}

const mapComponent = (componentString) => {
    const components = componentString.split('(');
    if (components.length = 2) {
        components[1].replace(")", "");
    }

    return components;
}

export function spellDataMapper(sourceField: string, mapper: Function, targetSpell: Spell) {

}