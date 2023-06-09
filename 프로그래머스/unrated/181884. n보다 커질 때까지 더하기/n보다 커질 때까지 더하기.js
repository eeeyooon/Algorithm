function solution(numbers, n) {
    let result = 0;
    numbers.map((v) => {
        if (result <= n) {
            result += v;
        } 
    })
    
    return result;
}