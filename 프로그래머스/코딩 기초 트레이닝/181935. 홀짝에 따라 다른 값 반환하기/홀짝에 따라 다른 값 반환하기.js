function solution(n) {
    let result = 0;
    if(n%2 === 0) {
        for(let i = n ; i > 0 ; i --) {
            if(i%2 === 0) result += Math.pow(i, 2);
        }
        return result;
    } else {
        for(let i = n ; i > 0 ; i --) {
            if(i%2 === 1) result += i;
        }
        return result;
    }
}