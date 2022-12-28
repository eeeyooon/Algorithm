function solution(money) {
    var glass = (Math.floor(money / 5500));
    var change = money % 5500;
    var answer = [glass, change];
    
    return answer;
}