function solution(n) {
      let result = 0;
 
    // 소수 찾기
    function isPrime(n) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return true;
        }
        return false
    }
    
    for(let i = 0; i <= n; i++){
        if(isPrime(i)) result++;
    }
    
    return result;
}

//합성수 : 소수가 아닌 자연수.
//1과 그 자신 이외의 수를 약수로 가지는 자연수.
//합성수는 소수로 나눌 수 있다.