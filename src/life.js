/*
Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically,
or diagonally adjacent. At each step in time, the following transitions occur:

Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overpopulation.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

export function advance(world) {
  return world.map((xArray, y, yArray) =>
    xArray.map((isAlive, x) => checkCell(isAlive, world, x, y))
  );
}

function checkCell(isAlive, world, x, y) {
  const neighborCount = countNeighbors(world, x, y);

  if (isAlive) {
    if (neighborCount < 2 || neighborCount > 3) {
      return 0;
    }
    return 1;
  }
  if (neighborCount === 3) {
    return 1;
  }
  return 0;
}

function countNeighbors(world, x, y) {
  const candidates = [
    [y - 1, x - 1],
    [y, x - 1],
    [y + 1, x - 1],
    [y - 1, x],
    [y + 1, x],
    [y - 1, x + 1],
    [y, x + 1],
    [y + 1, x + 1]
  ];

  return candidates
    .map(entry => getSingleNeighbor(world, entry[0], entry[1]))
    .filter(entry => entry).length;
}

function getSingleNeighbor(world, y, x) {
  if (y < 0) {
    y = world.length - 1;
  }

  if (x < 0) {
    x = world[0].length - 1;
  }

  if (y >= world.length) {
    y = 0;
  }
  
  if (x >= world[y].length) {
    x = 0;
  }

  return world[y][x];
}

export function generateRandomWorld(height, width) {
  return new Array(height)
    .fill()
    .map(entry => new Array(width).fill().map(entry => generateRandomCell()));
}

function generateRandomCell() {
  return Math.floor(Math.random() * 2);
}

export function countLiveCells(world) {
  return world.reduce((a, b) => a.concat(b)).reduce((a, b) => a + b);
}
