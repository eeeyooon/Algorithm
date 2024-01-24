function solution(keymap, targets) {
    
    let result = [];
    let targetKey = 0;
    
    for (let target of targets) {
        for (let i=0; i<target.length; i++) {
            
            let count = Infinity;
            
            keymap.map(key => {
                let index = key.indexOf(target[i]);
                 if(index > -1) {
                     count = Math.min(count,index+1);
                 }
            })
            
            targetKey += count;
        }
        
        result.push(targetKey);
        targetKey = 0;
    }
    
    result = result.map(el => {
        if(el === Infinity) { 
            el = -1
        }
        return el;
    });
    
    return result;
}