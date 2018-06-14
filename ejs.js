function printTriangle() {
  let tri = '';
  for (let i = 1; i <= 7; i += 1) {
    let str = '';
    for (let j = 0; j < i; j += 1) {
      str += '#';
    }
    tri += (i < 7) ? `${str}\n` : str;
  }
  return tri;
}

function printBoard() {
  const even = '#';
  const odd = ' ';
  let row = '';
  let board = '';
  for (let i = 0; i < 8; i += 1) {
    row = i % 2 === 0 ? '' : ' ';
    for (let j = 0; j < 15; j += 1) {
      row += j % 2 === 0 ? even : odd;
    }
    board += i < 7 ? `${row}\n` : row;
  }
  return board;
}

module.exports = {
  printBoard,
  printTriangle,
};
