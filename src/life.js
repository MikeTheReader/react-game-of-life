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
    xArray.map((isAlive, x) =>
      checkCell(isAlive, world, x, y)
    )
  );
}

function checkCell(isAlive, world, x, y) {
  let neighborCount = countNeighbors(world, x, y);

  if (isAlive) {
    if (neighborCount < 2 || neighborCount > 3) {
      return 0;
    }
    return 1;
  }
  else if (neighborCount === 3) {
    return 1;
  }
  return 0;
}

function countNeighbors(world, x, y) {
  let candidates = [
    [y-1, x-1],
    [y, x-1],
    [y+1, x-1],
    [y-1, x],
    [y+1, x],
    [y-1, x+1],
    [y, x+1],
    [y+1, x+1]
  ]

  return candidates
    .map(entry => getSingleNeighbor(world, entry[0], entry[1]))
    .filter(entry => entry)
    .length
}

function getSingleNeighbor(world, y, x) {
  if (y < 0 ||
      x < 0 ||
      y >= world.length ||
      x >= world[y].length) {
    return null;
  }
  return world[y][x]
}

export function generateRandomWorld(height, width) {
  let world = new Array(height);
  for (let y = 0; y < height; y++) {
    world[y] = new Array(width);
    for (let x = 0; x < width; x++) {
      world[y][x] = generateRandomCell();
    }
  }
  return world;
}

function generateRandomCell() {
  return Math.floor(Math.random()*2);
}
