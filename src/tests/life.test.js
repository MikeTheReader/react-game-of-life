import { advance, countLiveCells, generateRandomWorld } from "../life";

it("Obeys Rule One: Lone survivor dies", () => {
  const worldStart = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ];
  const expected = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  expect(advance(worldStart)).toEqual(expected);
});

it("Obeys rule One: Two individuals die", () => {
  const worldStart = [
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0]
  ];
  const expected = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  expect(advance(worldStart)).toEqual(expected);
});

it("Obeys Rule Two: Three neighbors live", () => {
  const worldStart = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
  ];
  const expected = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
  ];
  expect(advance(worldStart)).toEqual(expected);
});

it("Obeys Rule Three: Four neighbors die", () => {
  const worldStart = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1]
  ];
  const expected = [
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [1, 1, 0, 1],
    [0, 0, 1, 0]
  ];
  expect(advance(worldStart)).toEqual(expected);
});

it("Obeys Rule Four: Three neighbors breed life", () => {
  const worldStart = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0]
  ];
  const expected = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
  ];
  expect(advance(worldStart)).toEqual(expected);
});

it("Generates a random world.", () => {
  const zeroOrOne = {
    asymmetricMatch: actual => actual === 0 || actual === 1
  };
  let total = 0;
  const testWorld = generateRandomWorld(20, 5);
  expect(testWorld.length).toEqual(20);
  expect(testWorld[0].length).toEqual(5);
  testWorld.forEach(row => {
    expect(row.length).toEqual(5);
    row.forEach(cell => {
      expect(cell).toEqual(zeroOrOne);
      total += cell;
    });
  });
  expect(total).not.toEqual(20 * 5);
  expect(total).not.toEqual(0);
});

it("Counts the live cells in a world.", () => {
  const world = [
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 0]
  ];
  expect(countLiveCells(world)).toEqual(7);

  const zeroWorld = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  expect(countLiveCells(zeroWorld)).toEqual(0);
});
