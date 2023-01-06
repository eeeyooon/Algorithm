function solution(my_string) {
    
    const consonant  = 'aeiou';
    
    let newString = my_string.split('').filter((str)=>(!consonant.includes(str))).join('')
    
    
    return newString
    
    
}