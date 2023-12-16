function solution(n) {
    let sqrt = Math.sqrt(n);
    return parseInt(sqrt, 10) - sqrt === 0 ? (sqrt+1)*(sqrt+1) : -1;
}