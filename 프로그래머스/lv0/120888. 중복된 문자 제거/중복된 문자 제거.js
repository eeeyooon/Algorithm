function solution(my_string) {
    var answer = [];
    answer = my_string.split("");
    answer = [...new Set(answer)];
    answer = answer.join("");
    return answer;
}