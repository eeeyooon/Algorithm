function solution(my_string, n) {
    
    let str = [...my_string];
    
    let answer = "";
    
    for (let a of str) {
        answer += a.repeat(n);    
    }
    
    return answer;
}