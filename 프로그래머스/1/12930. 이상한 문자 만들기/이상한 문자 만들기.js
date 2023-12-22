const solution = (s) => {
    return s.split(" ")
        .map(v => v.split("")
            .map((alp, idx) => idx % 2 === 0
                ? alp.toUpperCase()
                : alp.toLowerCase())
            .join(""))
        .join(" ");
}
