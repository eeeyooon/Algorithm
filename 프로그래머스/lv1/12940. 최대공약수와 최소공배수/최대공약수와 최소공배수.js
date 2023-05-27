function solution(a, b) {
    
    let result = [];
    
    //최대 공약수
    function getGcd(a, b) {
        let gcd = 1;
        
        for (let i=2; i<=Math.min(a,b); i++) {
            if ((a % i === 0) && (b % i === 0)) {
                gcd = i;
            }
        }
        
        return gcd;
    }
    
    //최소 공배수
    
    function getLcm(a,b) {
        let lcm = 1;
        
        while (true) {
            
            if ((lcm % a === 0) && (lcm % b === 0)) {
                break;
            }
            lcm++;
        }
        
        return lcm;
    }
    
    result.push(getGcd(a,b));
    result.push(getLcm(a,b));
    
    return result;
}


//메모
    //최대공약수는 두 수 A와 B의 공통된 약수 중에 가장 큰 정수이다.
    //최대공약수를 구하는 가장 쉬운 방법은 2부터 min(A, B)까지 모든 정수로 나누어보는 방법이다.
    // 두 수, 혹은 그 이상의 여러 수의 공통인 배수 중 가장 작은 수이다.
    // lcm을 1부터 시작하여 점차 lcm++하면서 각각의 두 수를 lcm으로 나누었을 때 나머지 값이 0인지를 비교한다.
