function solution(n) {
    let answer = [];
    answer = (n + "").split("").reverse();
    return answer.map((data) => Number(data));
}