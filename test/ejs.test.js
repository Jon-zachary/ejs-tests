/* eslint-env jest */
import { printBoard, printTriangle } from '../ejs';

const board = printBoard();
const triangle = printTriangle();
const squareChars = `# # # # # # # #
 # # # # # # # #
# # # # # # # #
 # # # # # # # #
# # # # # # # #
 # # # # # # # #
# # # # # # # #
 # # # # # # # #`;
const triChars = `#
##
###
####
#####
######
#######`;
// test printBoard function
describe('Print chessboard', () => {
  test('chessboard is correct', () => {
    expect(board).toBe(squareChars);
  });

  test('chessboard has no extra characters', () => {
    expect(board.length).toBe(131);
  });

  test('chessboard has correct number of \'#\' symbols', () => {
    const hashCount = board.split('').filter(el => el === '#').length;
    expect(hashCount).toBe(64);
  });

  test('chessboard has correct number of rows', () => {
    const rowCount = board.split('\n').length;
    expect(rowCount).toBe(8);
  });
});

// test printTriangle function
describe('Print triangle', () => {
  test('triangle is correct', () => {
    expect(triangle).toBe(triChars);
  });

  test('Triangle has no extra characters', () => {
    expect(triangle.length).toBe(34);
  });

  test('Triangle has correct number of \'#\' sybols', () => {
    const hashCount = triangle.split('').filter(el => el === '#').length;
    expect(hashCount).toBe(28);
  });

  test('Triangle has correct number of rows', () => {
    const rowCount = triangle.split('\n').length;
    expect(rowCount).toBe(7);
  });
});

