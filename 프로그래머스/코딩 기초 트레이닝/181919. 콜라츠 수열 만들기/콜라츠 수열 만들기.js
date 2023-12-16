function solution(n) {
    const result = []
    let val = n;
    while(val !== 1) {
        result.push(val);
        if(val%2 === 0) {
            val /= 2;
        } else {
            val = 3 * val + 1;
        }
    }
    result.push(1);
    return result;
}