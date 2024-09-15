function solution(n) {
    let countedOne = n.toString(2).split('').filter(val => val === '1').length;
    
    let nextNumberCountedOne = 0;
    
    while (countedOne !== nextNumberCountedOne) {
        n++;
        nextNumberCountedOne = n.toString(2).split('').filter(val => val === '1').length;
    }
    
    return n;
    
}