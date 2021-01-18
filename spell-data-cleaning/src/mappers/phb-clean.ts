import Spell from "../../../react-spell-app/src/models/spell.interface";
import PHBSpell from "../models/phb-spell.interface";

function clean() {
    const preSpells = this.preSpells;
    for (let i = 0; i < preSpells.length; i++) {
        const currentSpell = preSpells[i];
        if (!currentSpell.id) {
            currentSpell.id = i + 1;
        }

        const mappedSpell = this.buildSpellFromPreSpell(currentSpell);

        // TODO: this is old code that I used for the initial migration, to use
        // it will need some return vectors
    }
}

  function buildSpellFromPreSpell(preSpell: PHBSpell): Spell {
    return {
        id: preSpell.id,
        name: preSpell.name,
        description: preSpell.description,
        higherLevel: preSpell.higherLevel,
        page: preSpell.page,
        range: preSpell.range,
        components: preSpell.components,
        material: preSpell.material,
        ritual: preSpell.ritual,
        duration: preSpell.duration,
        concentration: preSpell.concentration,
        archetype: preSpell.archetype ? preSpell.archetype.split('<br>').map(item => item.trim()) : [],
        castingTime: preSpell.castingTime,
        level: this.levelParser(preSpell.level),
        school: preSpell.school,
        class: preSpell.class.split(',').map(item => item.trim())
    }
}

function levelParser(levelString: string): number {
    if (levelString === 'Cantrip') {
        return 0;
    }
    return parseInt(levelString[0]);
}

const MOCKSPELL = {
    name: "Abi-Dalzim's Horrid Wilting",
    description: "<p>You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 10d8 necrotic damage on a failed save, or half as much damage on a successful one.You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.</p><p>This spells damage increases by 1d6 when you reach 5th Level (2d6), 11th level (3d6) and 17th level (4d6).</p>",
    page: "ee pc 15",
    range: "150 feet",
    components: "V, S, M",
    material: "A bit of sponge.",
    ritual: "no",
    duration: "Instantaneous",
    concentration: "no",
    casting_time: "1 action",
    level: "8th-level",
    school: "Necromancy",
    class: "Sorcerer, Wizard"
}