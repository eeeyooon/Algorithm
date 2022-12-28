function solution(my_string) {
    let regex = /[^0-9]/g;
    let answer = 0;
    let numbers = my_string.replace(regex, '').split('');
    
    for (let n of numbers) {
        answer += parseInt(n);
        
    }
    
    return answer
    
    
}