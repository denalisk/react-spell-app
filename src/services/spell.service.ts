import Spell from "../models/spell.interface";

export function addSavedSpell(spellId: number) {
    
}

export function getSpells(): Spell[] {
    return [
        {
            "id": 1,
            "name": "Abi-Dalzim's Horrid Wilting",
            "description": "<p style='margin:0;padding: 5px 0'>You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 10d8 necrotic damage on a failed save, or half as much damage on a successful one.You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.</p><p style='margin:0;padding: 5px 0'>This spells damage increases by 1d6 when you reach 5th Level (2d6), 11th level (3d6) and 17th level (4d6).</p>",
            "page": "ee pc 15",
            "range": "150 feet",
            "components": "V, S, M",
            "material": "A bit of sponge.",
            "ritual": "no",
            "duration": "Instantaneous",
            "concentration": "no",
            "archetype": [],
            "castingTime": "1 action",
            "level": 8,
            "school": "Necromancy",
            "class": [
                "Sorcerer",
                "Wizard"
            ]
        },
        {
            "id": 2,
            "name": "Absorb Elements",
            "description": "<p style='margin:0;padding: 5px 0'>The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.</p>",
            "higherLevel": "<p style='margin:0;padding: 5px 0'>When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.</p>",
            "page": "ee pc 15",
            "range": "Self",
            "components": "S",
            "ritual": "no",
            "duration": "1 round",
            "concentration": "no",
            "archetype": [],
            "castingTime": "1 action",
            "level": 1,
            "school": "Abjuration",
            "class": [
                "Druid",
                "Ranger",
                "Wizard"
            ]
        },
        {
            "id": 3,
            "name": "Acid Splash",
            "description": "<p style='margin:0;padding: 5px 0'>You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a dexterity saving throw or take 1d6 acid damage.</p> <p style='margin:0;padding: 5px 0'>This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</p>",
            "page": "phb 211",
            "range": "60 feet",
            "components": "V, S",
            "ritual": "no",
            "duration": "Instantaneous",
            "concentration": "no",
            "archetype": [],
            "castingTime": "1 action",
            "level": 0,
            "school": "Conjuration",
            "class": [
                "Sorcerer",
                "Wizard"
            ]
        },
        {
            "id": 4,
            "name": "Aganazzar's Scorcher",
            "description": "<p style='margin:0;padding: 5px 0'>A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one.</p>",
            "higherLevel": "<p style='margin:0;padding: 5px 0'>When you cast this spell using a spell slot of 3nd level or higher, the damage increases by 1d8 for each slot level above 2st.</p>",
            "page": "ee pc 15",
            "range": "30 feet",
            "components": "V, S, M",
            "material": "A red dragon's scale.",
            "ritual": "no",
            "duration": "Instantaneous",
            "concentration": "no",
            "archetype": [],
            "castingTime": "1 action",
            "level": 2,
            "school": "Evocation",
            "class": [
                "Sorcerer",
                "Wizard"
            ]
        },
        {
            "id": 5,
            "name": "Aid",
            "description": "<p style='margin:0;padding: 5px 0'>Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target’s hit point maximum and current hit points increase by 5 for the duration.</p>",
            "higherLevel": "<p style='margin:0;padding: 5px 0'>When you cast this spell using a spell slot of 3rd level or higher, a target’s hit points increase by an additional 5 for each slot level above 2nd.</p>",
            "page": "phb 211",
            "range": "30 feet",
            "components": "V, S, M",
            "material": "A tiny strip of white cloth.",
            "ritual": "no",
            "duration": "8 hours",
            "concentration": "no",
            "archetype": [],
            "castingTime": "1 action",
            "level": 2,
            "school": "Abjuration",
            "class": [
                "Cleric",
                "Paladin"
            ]
        },
        {
            "id": 6,
            "name": "Alarm",
            "description": "<p style='margin:0;padding: 5px 0'>You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won’t set off the alarm. You also choose whether the alarm is mental or audible.</p><p style='margin:0;padding: 5px 0'>A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping.</p><p style='margin:0;padding: 5px 0'>An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.</p>",
            "page": "phb 211",
            "range": "30 feet",
            "components": "V, S, M",
            "material": "A tiny bell and a piece of fine silver wire.",
            "ritual": "yes",
            "duration": "8 hours",
            "concentration": "no",
            "archetype": [],
            "castingTime": "1 minute",
            "level": 1,
            "school": "Abjuration",
            "class": [
                "Ranger",
                "Ritual Caster",
                "Wizard"
            ]
        },
        {
            "id": 7,
            "name": "Alter Self",
            "description": "<p style='margin:0;padding: 5px 0'>You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.</p><p style='margin:0;padding: 5px 0'><b>Aquatic Adaptation.</b> You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.</p><p style='margin:0;padding: 5px 0'><b>Change Appearance.</b> You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also can’t appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can’t use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again.</p><p style='margin:0;padding: 5px 0'><b>Natural Weapons.</b> You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it.</p>",
            "page": "phb 211",
            "range": "Self",
            "components": "V, S",
            "ritual": "no",
            "duration": "Up to 1 hour",
            "concentration": "yes",
            "archetype": [],
            "castingTime": "1 action",
            "level": 2,
            "school": "Transmutation",
            "class": [
                "Sorcerer",
                "Wizard"
            ]
        },
        {
            "id": 8,
            "name": "Animal Friendship",
            "description": "<p style='margin:0;padding: 5px 0'>This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast’s Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a wisdom saving throw or be charmed by you for the spell’s duration. If you or one of your companions harms the target, the spells ends.</p>",
            "higherLevel": "<p style='margin:0;padding: 5px 0'>When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st.</p>",
            "page": "phb 212",
            "range": "30 feet",
            "components": "V, S, M",
            "material": "A morsel of food.",
            "ritual": "no",
            "duration": "24 hours",
            "concentration": "no",
            "archetype": [
                "Cleric: Nature"
            ],
            "castingTime": "1 action",
            "level": 1,
            "school": "Enchantment",
            "class": [
                "Bard",
                "Cleric",
                "Druid",
                "Ranger"
            ]
        },
        {
            "id": 9,
            "name": "Animal Messenger",
            "description": "<p style='margin:0;padding: 5px 0'>By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as “a man or woman dressed in the uniform of the town guard” or “a red-haired dwarf wearing a pointed hat.” You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 24 hours for a flying messenger, or 25 miles for other animals.</p><p style='margin:0;padding: 5px 0'>When the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice. The messenger speaks only to a creature matching the description you gave. If the messenger doesn’t reach its destination before the spell ends, the message is lost, and the beast makes its way back to where you cast this spell.</p>",
            "higherLevel": "<p style='margin:0;padding: 5px 0'>If you cast this spell using a spell slot of 3nd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd.</p>",
            "page": "phb 212",
            "range": "30 feet",
            "components": "V, S, M",
            "material": "A morsel of food.",
            "ritual": "yes",
            "duration": "24 hours",
            "concentration": "no",
            "archetype": [],
            "castingTime": "1 action",
            "level": 2,
            "school": "Enchantment",
            "class": [
                "Bard",
                "Druid",
                "Ranger",
                "Ritual Caster"
            ]
        },
        {
            "id": 10,
            "name": "Animal Shapes",
            "description": "<p style='margin:0;padding: 5px 0'>Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a Large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your action to transform affected creatures into new forms.</p><p style='margin:0;padding: 5px 0'>The transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies. You can choose a different form for each target. A target’s game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn’t reduce the creature’s normal form to 0 hit points, it isn’t knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can’t speak or cast spells.</p><p style='margin:0;padding: 5px 0'>The target’s gear melds into the new form. The target can’t activate, wield, or otherwise benefit from any of its equipment.</p>",
            "page": "phb 212",
            "range": "30 feet",
            "components": "V, S",
            "ritual": "no",
            "duration": "Up to 24 hours",
            "concentration": "yes",
            "archetype": [],
            "castingTime": "1 action",
            "level": 8,
            "school": "Transmutation",
            "class": [
                "Druid"
            ]
        }
    ]
}