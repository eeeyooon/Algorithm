function solution(a, b) {
    
    let answer = 0;
    
    // if (a <= b) {     
    //     for (let i=a; i <= b; i++) {
    //         answer += i;
    //     }   
    // } else {
    //     for (let i=b; i <= a; i++) {
    //         answer += i;
    //     }
    // }
    
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) answer += i;
    
    return answer;
}