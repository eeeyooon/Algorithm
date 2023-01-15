function solution(x) {
    let arr = [];
    let sum = 0;
    arr = x.toString().split('');
    
    for (let n of arr) {
        sum += Number(n);
        
    }
    
    return x % sum === 0 ? true : false;
    
}
