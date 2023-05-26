function solution(arr, divisor) {
    
    let answer = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i]%divisor === 0) {
            answer.push(arr[i]);
        }
    }
    return answer.length ? answer.sort((a,b) => a-b) : [-1];
}
