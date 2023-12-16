function solution(a, b) {
    const stringAB = a.toString() + b.toString();
    
    return Number(stringAB) > 2 * a * b ? Number(stringAB) : 2 * a* b;
}