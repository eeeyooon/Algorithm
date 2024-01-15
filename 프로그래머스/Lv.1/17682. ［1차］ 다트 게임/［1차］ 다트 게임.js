function solution(dartResult) {
    let answer = 0;
    let calculatedScore = [];
    let temp = 0; // 숫자 담을 변수
    
    for(let i=0; i<dartResult.length; i++) {
        if(dartResult[i] >= 0 && dartResult[i] <= 9 ) { // 숫자일 때
            if( dartResult[i] == 1 && dartResult[i+1] == 0 ) { //10일 때
                temp = 10;
                // "10"에서 0을 건너뛰기 위해
                i++;
            } else { // 10이 아닐 경우
                temp = dartResult[i];
            }
        } else if(dartResult[i] === "S") {
            calculatedScore.push(temp);
            
        } else if (dartResult[i] === "D") {
            calculatedScore.push(Math.pow(temp,2));
            
        } else if (dartResult[i] === "T") {
            calculatedScore.push(Math.pow(temp,3));
            
        } else if (dartResult[i] === "#") { 
            calculatedScore[calculatedScore.length-1] *= -1; // 아차상 > 해당 점수 마이너스
            
        } else if (dartResult[i] === "*") { // 스타상 > (직전 + 해당)*2
            calculatedScore[calculatedScore.length-1] *= 2;
            calculatedScore[calculatedScore.length-2] *= 2;
        }
    }
    for(let i=0; i<calculatedScore.length; i++) { // 계산된 점수들 모두 누적
        answer += Number(calculatedScore[i]);
    }
        
    return answer;
}