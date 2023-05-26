function solution(left, right) {
    
    let result = 0;
    
    //약수의 개수를 알려주는 함수
    function countDivisor(num) {
        let count = 0;
        for (let i=1; i<=num; i++) {
            if (num % i === 0) {
                count++;
            } 
        }
        return count;
    }
    
    //num의 약수의 개수를 세고, 짝수인 애들은 더하고 홀수인 애들은 빼서 리턴.
    for (let num=left; num<=right; num++) {
                
        ((countDivisor(num) % 2) ? result-=num : result+=num);
        
    }
    
    return result;
    
}