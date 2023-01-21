function solution(n) {
    const 수 = '수';
    const 박 = '박';
    let answer = '';
    for (let i=0; i<n; i++){
        i % 2 === 0 ? answer += 수 : answer += 박;
    }
    
    return answer
}