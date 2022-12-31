function solution(n) {
    let x = Math.floor(Math.sqrt(n));
    return (Math.sqrt(n))%1 === 0 ? Math.pow(x+1, 2) : -1
}
