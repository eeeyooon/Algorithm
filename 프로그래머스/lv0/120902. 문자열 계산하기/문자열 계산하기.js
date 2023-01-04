function solution(my_string) {
    
    let calc = my_string.split(' ');
    
    let result = Number(calc[0]);
    
    calc.forEach((item, index) => {
        if (item === "+") {
            result += Number(calc[index + 1]);
        } else if (item === "-") {
            result -= Number(calc[index + 1]);
        }
    })
    

    return result;
}