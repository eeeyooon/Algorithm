function solution(arr, divisor) {
    let answer = [];
    answer = arr.filter((v) => v/divisor === parseInt(v/divisor));
    answer.length !== 0 ? answer.sort((a,b)=> a-b) : answer = [-1];
    return answer;
}
