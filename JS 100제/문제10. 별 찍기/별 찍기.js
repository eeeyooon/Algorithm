function solution(n) {
  let tree = "";
  for (let i = 0; i <= n; i++) {
    let star = "";
    for (let j = 0; j <= n - i; j++) {
      star += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      star += "*";
    }
    tree += star + "\n";
  }

  console.log(tree);
}

solution(5);
