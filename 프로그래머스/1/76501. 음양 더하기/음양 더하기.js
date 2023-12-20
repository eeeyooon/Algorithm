function solution(absolutes, signs) {
    let answer = 0;
    
    absolutes.forEach((num, idx)=> {
        signs[idx] ? answer += num : answer -= num;
    })
    
    return answer;
    
}