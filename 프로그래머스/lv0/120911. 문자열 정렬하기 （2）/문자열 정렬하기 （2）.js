function solution(my_string) {
    var answer = '';
    answer = my_string.toLowerCase();
    return answer.split("").sort().join("");
}