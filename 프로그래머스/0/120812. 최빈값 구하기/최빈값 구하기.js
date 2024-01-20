function solution(array) {
 
    const obj = {};
    const count = [];
    
    array.forEach((n) => {
        obj[n] = ++obj[n] || 1;
    })
    
    
    
    for (let num in obj) {
        count.push([num, obj[num]])
    }
    
    count.sort((a,b) => b[1] - a[1]);
    
    // 배열의 값이 1개일때
    if (count.length === 1) return +count[0][0];
    // 최빈값이 여러개일때
    if (count.length > 1 && count[0][1] === count[1][1]) return -1;
    
    return +count[0][0];
    
}