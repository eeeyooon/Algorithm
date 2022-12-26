function solution(array) {
    
    let result = array.sort((a,b) => a - b);
    let center = Math.floor(array.length / 2);
    return result[center];
}