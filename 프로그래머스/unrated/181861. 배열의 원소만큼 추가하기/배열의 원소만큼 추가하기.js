const solution = (arr) => arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], [])
