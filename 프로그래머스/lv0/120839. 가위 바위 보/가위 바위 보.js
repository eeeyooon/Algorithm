function solution(rsp) {
    
    let new_rsp = rsp.split('');
    let answer = ''
    for (let i=0; i<new_rsp.length; i++) {
        if (new_rsp[i] === '2') {
            answer += '0'
        } else if (new_rsp[i] === '0') {
            answer += '5';
        } else {
            answer += '2';
        }
    }
    
    return answer;
}