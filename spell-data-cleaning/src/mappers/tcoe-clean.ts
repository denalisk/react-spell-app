import Spell from "../../../react-spell-app/src/models/spell.interface";
import ISpellMapper from "../models/spell-mapper.interface";
import XGESpell from "../models/xge-spell.interface";

export class TCOEMapper implements ISpellMapper<TCOESpell> {
    public map(preSpell: XGESpell): Spell {
        const newSpell = {
            id: 0,
            name: preSpell.Name,
            description: preSpell.Description,
            page: 'xge',
            components: this.mapComponent(preSpell.Components)[0],
            higherLevel: this.mapDescription(preSpell.Description)[1],
            range: preSpell.Range,
            material: this.mapComponent(preSpell.Components)[1],
            ritual: preSpell.Ritual ? 'yes' : 'no',
            duration: this.mapDuration(preSpell.Duration)[0],
            concentration: this.mapDuration(preSpell.Duration)[1],
            castingTime: preSpell.CastingTime,
            level: parseInt(preSpell.Level),
            school: preSpell.School,
            class: preSpell.Classes
        };

        return newSpell;
    }

    private mapComponent = (componentString: string): string[] => {
        if (!componentString) {
            console.log(`unable to read component string for spell`);
            return ['ERROR', 'ERROR']
        }


        const components = componentString.split(' (');
        if (components.length === 2) {
            components[1].replace(')', '');
        }

        return components;
    }

    private mapDescription = (description: string): string[] => {
        if (!description) {
            console.log(`unable to read description string for spell`);
            return ['ERROR', 'ERROR']
        }

        return description.split('<p>At Higher Levels.</p>');
    }

    /**
     * 
     * @param duration tuple of the duration, [durationString, concentrationYesNo]
     */
    private mapDuration = (duration: string): string[] => {
        if (!duration) {
            console.log(`unable to read duration string for spell`);
            return ['ERROR', 'ERROR']
        }

        const durations = duration.split(', ');
        const mappedDurations = []
        if (durations.length === 2) {
            mappedDurations[0] = durations[1].charAt(0).toUpperCase() + durations[1].slice(1);
            mappedDurations[1] = 'yes';
        } else {
            mappedDurations[0] = durations[0];
            mappedDurations[1] = 'no';
        }

        return mappedDurations;
    }
}

export function spellDataMapper(sourceField: string, mapper: Function, targetSpell: Spell) {

}