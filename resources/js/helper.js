export const level = Object.freeze({
    n1: 'N1',
    n2: 'N2',
    n3: 'N3',
    n4: 'N4',
    n5: 'N5',
});

export const skill = Object.freeze({
    vocabulary: 'vocabulary',
    grammar: 'grammar',
    reading: 'reading',
    listening: 'listening',
});

export function parseLevel(i) {
    switch (i) {
        case 1: return level.n1;
        case 2: return level.n2;
        case 3: return level.n3;
        case 4: return level.n4;
        case 5: return level.n5;
        default: return '';
    }
}

export function parseSkill(i) {
    switch (i) {
        case 1: return skill.vocabulary;
        case 2: return skill.grammar;
        case 3: return skill.reading;
        case 4: return skill.listening;
        default: return '';
    }
}
