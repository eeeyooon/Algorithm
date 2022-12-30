function solution(n) {
    
    let number = n.toString();
    let answer = 0;
    
    for (let a of number) {
        answer += +a;
    }
    
    return answer;
}