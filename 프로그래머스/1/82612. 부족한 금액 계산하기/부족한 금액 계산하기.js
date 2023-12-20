function solution(price, money, count) {
    let result = 0;
    
    for (let playCount = 1; playCount<=count; playCount++){
        result += price * playCount;
    }
    
    return money < result ? result - money : 0;
    
}