function Circle(n) {
  const size = n * n * 3.14;

  return size;
}

const r = prompt("반지름을 입력하세요.");

console.log(Circle(r));
