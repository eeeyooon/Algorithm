function solution(arr, divisor) {
    var answer = [];
    let element = 0;
    
    for (let n of arr) {
        if (n%divisor === 0) {
            answer.push(n);
            element++;
        }
    }
    
    if (element === 0) {
        answer.push(-1);
    }
    
    return answer.sort((a,b) => a-b);
}