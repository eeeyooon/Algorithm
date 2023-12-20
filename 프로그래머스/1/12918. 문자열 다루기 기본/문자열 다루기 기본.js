function solution(s){
    const regex = /[^0-9]/g;
    let filterStrLength = s.replace(regex, "").length;
    return s.length === filterStrLength && (filterStrLength === 4 || filterStrLength === 6);
}