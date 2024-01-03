function solution(answers) {
    let result = [];
    
    const one = [1,2,3,4,5]
    const two = [2,1,2,3,2,4,2,5]
    const three = [3,3,1,1,2,2,4,4,5,5]
    
    let oneScore = 0, twoScore = 0, threeScore = 0;
    
    answers.map((answer, i) => {
        if (one[i % one.length] === answer) oneScore += 1;
        if (two[i % two.length] === answer) twoScore += 1;
        if (three[i % three.length] === answer) threeScore += 1;
    })

    let maxScore = Math.max(oneScore, twoScore, threeScore);
    
    if(oneScore === maxScore)
        result.push(1);
    if(twoScore === maxScore)
        result.push(2);
    if(threeScore === maxScore)
        result.push(3);
    
    return result;
    
}