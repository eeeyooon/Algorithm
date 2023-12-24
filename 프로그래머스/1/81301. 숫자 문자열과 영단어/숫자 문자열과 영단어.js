function solution (s) {
    const engNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;
    engNum.map((v,i) => {
        let temp = answer.split(v);
        answer = temp.join(i);
    })
    
    return +answer;
    
}