function solution(s){
    let newArr = s.toLowerCase().split("");
    let p = 0;
    let y = 0;
    for (let a of newArr) {
        if ( a === 'p') {
            p++;
        } else if ( a === 'y') {
            y++;
        }
    }
    
    return (p+y === 0) ? true : (p === y) ? true : false; 

    
}