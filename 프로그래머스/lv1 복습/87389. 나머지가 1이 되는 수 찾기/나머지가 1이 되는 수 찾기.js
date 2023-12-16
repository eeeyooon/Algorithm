function solution(n) {
    let x = 1;
    while ( n%x !== 1) {
        x++;
    }
    return x;
}