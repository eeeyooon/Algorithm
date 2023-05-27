function solution(s){ 
    let cnt = 0;

    for (let i=0; i<s.length; i++) {
        s[i] === "(" ? cnt += 1 : cnt +=  -1 
        
        // 만약 )로 시작한다면 cnt는 -1이 되므로 바로 break가 되어 false
        
        if (cnt < 0) {
            break;
        }
    }
    return cnt === 0 ? true : false
}