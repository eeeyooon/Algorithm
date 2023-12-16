function solution(myString) {
    
    let newArr = myString.toLowerCase().split("");
    let answer = [];
    for (let a of newArr) {
        if (a === 'a') {
            answer += a.toUpperCase();
        } else {
            answer += a;
        }
    }
    
    return answer;
}