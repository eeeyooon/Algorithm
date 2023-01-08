function solution(age) {
    let ageArr = age.toString().split('');
    let str962 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i','j']
    let answer = '';
    
    for (let i=0; i < ageArr.length; i++) {
        let index = ageArr[i];
        
        answer += str962[index];
        
    }
    
    return answer;
}