function solution(n) {
    let x = Math.floor(Math.sqrt(n));
    return (Math.sqrt(n))%1 === 0 ? (x+1)*(x+1) : -1
}
