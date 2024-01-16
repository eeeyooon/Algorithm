function solution(X, Y) {
    let answer = '';
    
    X = X.split("");
    Y = Y.split("")
    
    for (let i=0; i<=9; i++) {
        const accX = X.filter(n => +n === i).length;
        const accY = Y.filter(n => +n === i).length;
        
        answer += i.toString().repeat(Math.min(accX,accY))
    }
    
    if (answer.length === 0) return "-1";
    if (+answer === 0) return "0";
    
    return answer.split("").sort((a,b) => +b - +a).join("");
    
}