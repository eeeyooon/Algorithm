function solution(x, n) {
    let answer = [];
    let i = 0;
    while(answer.length !== n) {
        answer.push(x + (x*i));
        i++;
    }
    
    return answer;
}