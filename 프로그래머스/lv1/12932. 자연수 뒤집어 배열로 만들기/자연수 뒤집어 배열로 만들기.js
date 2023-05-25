function solution(n) {
    return [...(n + "")].reverse().map(s => Number(s));
}