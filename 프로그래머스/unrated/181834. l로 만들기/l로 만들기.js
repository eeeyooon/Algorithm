function solution(myString) {
    return [...myString].map(a => a.charCodeAt() < 108 ? 'l' : a).join("")
}