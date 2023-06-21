function solution(n, control) {
    const controller = {
        w:1,
        s:-1,
        d:10,
        a:-10
    }
    return [...control].reduce((acc, cur)=>acc + controller[cur], n);
}