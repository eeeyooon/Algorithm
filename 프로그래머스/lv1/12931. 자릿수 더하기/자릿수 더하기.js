function solution(n)
{
    var answer = 0;

    let num = n.toString();
    
    for (let a of num) {
        answer += +a;
    }
    
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}