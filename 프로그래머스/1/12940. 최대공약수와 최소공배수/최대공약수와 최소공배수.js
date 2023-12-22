function solution(n, m) {
    // 최대 공약수(gcd) - 공통된 약수 중에 가장 큰 정수
    // 최소 공배수(lcm) - 어떤 수를 두 수로 나누었을 때 나머지가 0인 수 중 가장 작은 수
    const getGCD = (n, m) => {
        let gcd = 1;
        for (let i=2; i<=Math.min(n,m); i++){
            if (n%i === 0 && m%i === 0) {
                gcd = i
            }
        }
        
        return gcd;
    }
    
    const getLCM = (n, m) => {
        let lcm = 1;
        
        while(true) {
            if (lcm%n === 0 && lcm%m ===0) {
                break;
            }
            lcm++
        }
        
        return lcm;
    }
    
    return [getGCD(n,m), getLCM(n,m)]
    
}