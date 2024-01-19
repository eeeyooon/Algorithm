function solution(spell, dic) {
    spell = spell.sort().join("");
    
    return dic.map(word => word.split("").sort().join("")).find(word => word === spell) !== undefined ? 1 : 2;
}