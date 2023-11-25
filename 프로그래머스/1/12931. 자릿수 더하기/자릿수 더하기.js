function solution(n) {
    return n.toString().split("").reduce((acc, val) => {
        return acc + +val;
    }, 0)
}