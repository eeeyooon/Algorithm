const solution = (arr, n) => arr.map((num, idx) => (
    arr.length % 2 !== idx % 2 ? num + n : num
))