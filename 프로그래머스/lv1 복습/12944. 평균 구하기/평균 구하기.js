const solution = (arr) => {
	return arr.reduce((acc,val) => acc+val, 0) / arr.length;
}