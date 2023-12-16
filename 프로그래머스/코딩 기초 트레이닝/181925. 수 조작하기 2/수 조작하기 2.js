function solution(numLog) {
    let result = "";
    for (let i=0; i < numLog.length; i++) {
        let account = numLog[i+1] - numLog[i];
        if (account === 1) {
            result += "w"
        } else if (account === -1) {
            result += "s";
        } else if (account === 10) {
            result += "d";
        } else if (account === -10) {
            result += "a";
        }
    }
    
    return result;
}