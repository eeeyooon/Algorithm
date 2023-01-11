function solution(num) {
    
    for (let i=0; i<500; i++) {
        
        if (num !== 1) {
            
            if (num % 2 === 0) {
                num = num/2
            } else if (num % 2 === 1) {
                num = num * 3 + 1
            }   
            
        } else {
            return i;
        }
        
    }
    
    return -1;
    
}
