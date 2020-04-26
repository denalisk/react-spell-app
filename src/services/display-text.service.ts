export function levelTextConvert(level: number) {
    if (level != 0 && !level) {
        return '' + level;
    }

    if (level === 0) {
        return 'Cantrip';
    }
    return 'Level ' + level;
}

export function schoolLevelText(level: number, school: string) {
    return level === 0 ? school + ' ' + levelTextConvert(level) : levelTextConvert(level) + ' ' + school
}