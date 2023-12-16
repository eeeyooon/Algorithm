const solution = (s) => {
    let p = 0;
    let y = 0;
    for (let a of s.toLowerCase()) {
        if (a === "p") {
            p++
        } else if (a === "y") {
            y++;
        }
    }
    
    return p === y;
}

