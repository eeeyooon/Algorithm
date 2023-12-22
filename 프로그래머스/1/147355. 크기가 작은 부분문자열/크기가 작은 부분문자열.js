function solution(t, p) {
    
    let newArr = []
    for (let i=0; i<t.length; i++) {
           newArr.push(t.slice(i, i+p.length))
    }
    return newArr.filter(v=> v.length === p.length && +v <= p).length;

}