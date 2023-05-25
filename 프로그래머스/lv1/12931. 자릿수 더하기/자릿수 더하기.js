function solution(n)
{
    
    const newArr = n.toString().split("");
    let answer = 0;
    for (let a of newArr) {
        answer += +a;
    }
    
    return answer;

}