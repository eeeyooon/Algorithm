function solution(s) {

    let centerIdx = Math.floor(s.length / 2);
    return (s.length % 2) ? s.charAt(centerIdx) : s.charAt(centerIdx - 1) + s.charAt(centerIdx);


}