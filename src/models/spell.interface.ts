interface Spell {
    id: number
    name: string;
    description: string;
    higherLevel?: string;
    page: string;
    range: string;
    components: string;
    material?: string;
    ritual: string;
    duration: string;
    concentration: string;
    archetype?: string[];
    castingTime: string;
    level: number;
    school: string;
    class: string[];
}

export default Spell;