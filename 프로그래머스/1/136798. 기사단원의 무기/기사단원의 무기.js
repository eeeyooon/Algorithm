function solution(number, limit, power) {
    let answer = 0;
    for (let i=1; i<=number; i++) {
        let count = 0;
        let j = 1;
        while (j*j <= i) {
            if (i%j === 0) {
                count += (j*j === i) ? 1 : 2;
            }
            j++;
        }
        answer += (count > limit) ? power : count;
    }
    return answer;
}