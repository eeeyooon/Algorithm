function solution(k, score) {
    let fame = [];
    let result = [];
    for (let i=0; i<score.length; i++) {
        if (i < k) {
            fame.push(score[i])
            fame.sort((a,b)=>a-b);
        } else {
            if (score[i] > fame[0]) {
                fame[0] = score[i];
                fame.sort((a,b)=>a-b);
            } 
        }
        result.push(fame[0])
    }
        
    return result;
}