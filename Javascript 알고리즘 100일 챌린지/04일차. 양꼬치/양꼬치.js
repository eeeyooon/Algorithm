function solution(n, k) {
    let sum = 12_000 * n + 2_000 * k;
    return sum - (2_000 * ~~(n/10));
}
