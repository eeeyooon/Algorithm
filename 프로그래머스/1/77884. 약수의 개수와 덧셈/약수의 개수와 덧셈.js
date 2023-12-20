function solution(left, right) {
    // 약수는 본인을 제외하고는 주어진 수의 절반보다 클 수 없음.
    const countDivisor = (num) => {
        let index = 1;
        let divisorNum = [];
        while (index <= num/2) {
            if (num % index === 0) divisorNum.push(index);
            index++;
        }
        divisorNum = [...divisorNum, num];
        return divisorNum.length;
    }
    
    let answer = 0;
    for (let num=left; num<=right; num++){
        countDivisor(num)%2 === 0 ? answer += num: answer -= num;
    }
    
    return answer;
}