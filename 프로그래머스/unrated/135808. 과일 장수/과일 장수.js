function solution(k, m, score) {
    
    // 사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score
    
    score.sort((a,b) => b - a);

    let result = 0;
    
    // 최저 점수 인덱스
    let lowIdx = m - 1;
    
    for (let i=0; i < Math.floor(score.length / m); i++) {
        
        result += score[lowIdx] * m;
        
        lowIdx += m;
        
    }
    
    return result;
}