function solution(my_string) {
    const words = my_string.split(" ");
    return words.filter((w) => w !== "");
}