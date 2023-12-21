process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const input = data.split(" ");
    const n = Number(input[0]);
    const m = Number(input[1]);
    
    console.log(("*".repeat(n)+"\n").repeat(m));

});