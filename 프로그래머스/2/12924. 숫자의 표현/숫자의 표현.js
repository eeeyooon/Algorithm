function solution(n) {
    let count = 0;

    for (let start = 1; start <= n; start++) {
        let sum = 0;
        for (let current = start; current <= n; current++) {
            sum += current;
            if (sum === n) {
                count++;
                break; 
            } else if (sum > n) {
                break; 
            }
        }
    }

    return count;
}

