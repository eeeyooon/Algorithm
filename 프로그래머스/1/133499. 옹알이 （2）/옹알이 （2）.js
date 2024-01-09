function solution(babbling) {
    let answer = 0;
    const words = ["aya", "ye", "woo", "ma"];
    
    for (let i=0; i<babbling.length; i++) {
        let bab = babbling[i];
        
        for (let j=0; j<words.length; j++) {
            if (bab.includes(words[j].repeat(2))) break;
            bab = bab.split(words[j]).join(" ");
        }
        
        if (bab.split(" ").join("").length === 0) {
            answer++;
        }
    }
    return answer;
}