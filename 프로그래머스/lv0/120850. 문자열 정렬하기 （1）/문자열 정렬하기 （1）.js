function solution(my_string) {
    
    return my_string.replace(/[^0-9]/g, "").split("").map(str => +str).sort((a,b) => a-b);
    
}









// return my_string.replace(/[^\d]/g,'').split('').map(str=>+str).sort();
