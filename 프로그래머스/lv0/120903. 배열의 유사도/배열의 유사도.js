function solution(s1, s2) {
    //return (s1.length + s2.length) - (s1.concat(s2).length) ;
    
    let result = [...new Set(s1.concat(s2))];
    
    return (s1.length + s2.length) - result.length;
}



//const result = [...new Set(arr1)];