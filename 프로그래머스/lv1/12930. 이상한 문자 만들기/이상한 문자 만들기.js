function solution(s) {
    //split()으로 배열로 만들고
    //짝수일때 대문자 홀수일때 소문자
    
    let result = "";
        s.split(" ").forEach((word) => {
            for (let i=0; i<word.length; i++) {
                if (i%2 === 0) {
                    result += word[i].toUpperCase();
                    
                } else {
                    result += word[i].toLowerCase();
                    
                }
                
            }
            
                result += " ";
        })
    
        return result.substring(0, result.length - 1);
}
