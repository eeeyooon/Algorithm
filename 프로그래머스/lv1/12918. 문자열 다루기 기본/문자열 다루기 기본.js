function solution(s) {
    
    let answer = true;
    if (s.length == 4 || s.length == 6) {
        
       for (let num of s) {
           if (isNaN(Number(num))) answer = false;  
       }
        
    } else {
        answer = false;
    }
    
    return answer;
}

//Number는 "e"일때도 숫자로 생각해서 지수로 변환함