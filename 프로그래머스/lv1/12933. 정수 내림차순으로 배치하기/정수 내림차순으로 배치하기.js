function solution(n) {
    // return (n.toString().split('').sort((a,b) => b-a).join(''))/1;
    
    return +(n.toString().split('').sort().reverse().join(''));
}