function solution(nums) {
    
    function isPrime(num) {
        if (num === 1) return false;
        for (let i=2; i<num; i++) {
            if (num % i === 0) return false;
        }
        
        return true;
    }
    
    // 3개씩 더했을 때 만들 수 있는 모든 숫자
    let allNums = [];
    
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            for (let k=j+1; k<nums.length; k++) {
                allNums.push(nums[i]+nums[j]+nums[k])
            }
        }
    }
    
    return [...allNums.filter(v=>isPrime(v))].length;
       
}