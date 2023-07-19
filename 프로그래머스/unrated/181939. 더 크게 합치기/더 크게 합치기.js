function solution(a, b) {
    const ab = +(a.toString() + b.toString());
    const ba = +(b.toString() + a.toString());
    return (ab >= ba) ? ab : ba;
}