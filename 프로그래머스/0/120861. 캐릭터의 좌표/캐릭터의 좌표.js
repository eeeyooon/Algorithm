function solution(keyinput, board) {
  const result = [0, 0];
  const row = ~~(board[0] / 2);
  const column = ~~(board[1] / 2);

  for (let key of keyinput) {
    switch (key) {
      case 'left' : 
          result[0] -= 1;
          break;
      case 'right' : 
          result[0] += 1; 
          break;
      case 'up' : 
          result[1] += 1;
          break;
      case 'down' : 
          result[1] -= 1;
          break;
    }

    if (result[0] > row) {
      result[0] -= 1;
    } else if (result[0] < -row) {
      result[0] += 1;
    } 

    if (result[1] > column) {
      result[1] -= 1;
    } else if (result[1] < -column) {
      result[1] += 1;
    }
  }

  return result;
}