function solution(x) {
    
    
    let sum = 0;
    x.toString().split("").map((v) => sum += (+v));
    return x % sum ? false : true;
    
}
