function solution(d, budget) {
    let count = 0;
    let sum = 0;
    
    d.sort((a,b)=>a-b);
    
    for (let i=0; i<d.length; i++) {
        sum += d[i];
        if (sum > budget) return count;
        count++;
    }
    return count;
}
