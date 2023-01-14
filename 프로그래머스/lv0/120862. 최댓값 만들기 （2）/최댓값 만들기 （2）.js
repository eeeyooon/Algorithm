function solution(numbers) {
    
    let sorted = [];
    
    sorted = numbers.sort((a,b)=> (a-b));
    
    return Math.max(sorted[0] * sorted[1], sorted[sorted.length - 1] * sorted[sorted.length - 2 ])
 
}