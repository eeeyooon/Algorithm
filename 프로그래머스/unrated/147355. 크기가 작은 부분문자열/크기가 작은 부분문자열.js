function solution(t, p) {
    
    //1. p.length만큼 t에서 부분문자를 가져오기.
    //2. 그 부분문자들 중에서 p보다 작거나 같은 것들의 개수를 구하기
    
    //1. slice
    
    let count = 0;
    for (let i=0; i<t.length-p.length + 1; i++) {
        let str = t.slice(i, i + p.length);
        
        if (+str <= +p) {
            count += 1;
        }
    }
    
    return count;
    

}