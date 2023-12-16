function solution(num_str) {
    let arr = num_str.split('').map(Number);
    let answer = 0;
    for (let n of arr) {
        answer += n;
    }
    
    return answer;
}