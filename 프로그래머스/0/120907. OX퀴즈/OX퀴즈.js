function solution(quiz) {
    
    let result = [];
    
    quiz.map(formula => {
        
        const [a, operator, b, _, numResult] = formula.split(" ");

        if (operator === "+") {
            return +a + +b === +numResult ? result.push("O") : result.push("X");
        } else {
            return +a - +b === +numResult ? result.push("O") : result.push("X");
        }
        
    });
    
    return result;
}