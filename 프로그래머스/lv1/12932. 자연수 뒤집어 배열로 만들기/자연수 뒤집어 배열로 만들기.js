function solution(n) {
    let answer = [];
    answer = (n + "").split("").reverse().map((data) => Number(data));
    return answer;
}