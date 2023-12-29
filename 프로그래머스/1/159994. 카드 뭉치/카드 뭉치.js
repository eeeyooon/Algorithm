function solution(cards1, cards2, goal) {    
       let count = 0;
    
        for (let i=0; i<goal.length; i++) {
            let findWord = goal[i];
            
            if (findWord === cards1[0]) {
                cards1.shift();
                count++;
            } else if (findWord === cards2[0]) {
                cards2.shift();
                count++;
            } 
            
        }
    
    return count === goal.length ? "Yes" : "No";
    
}