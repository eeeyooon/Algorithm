function solution(k, m, score) {
    // 점수가 큰 순으로 사과 정렬
    score.sort((a,b) => b - a);
    
    let result = 0;
    
    for (let i=0; i<score.length; i+=m) {
        
        let box = score.slice(i, i+m);
        
        if (box.length === m) {
            result += m*box[m-1];
        }
    }
    
    return result;
}