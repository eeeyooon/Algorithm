function solution(s){
    let p = 0;
    let y = 0;
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    let result = s.toLowerCase().split("");
    for (let a of result) {
        if (a === "p") {
            p++;
        } else if (a === "y") {
            y++;
        }
    }
    
    console.log('Hello Javascript')

    return p === y ? true : false ;
}