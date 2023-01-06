function solution(numbers) {
    let answer = '';
    
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i = 0; i < num.length; i++){
      //split을 num[i] 기준으로 자르고 잘린곳을 i로 메꿔주는 방식
        numbers = numbers.split(num[i]).join(i)
    }
    
  	//split은 string이라 마지막에 number로 형 변환
    return Number(numbers)
    
    return answer;
}