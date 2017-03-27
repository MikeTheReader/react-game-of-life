import { advance, generateRandomWorld } from '../life';

it('Obeys Rule One: Lone survivor dies', () => {
  let worldStart = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ];
  let expected = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  expect(advance(worldStart)).toEqual(expected);
});

it('Obeys rule One: Two individuals die', () => {
    let worldStart = [
      [0, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ];
    let expected = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    expect(advance(worldStart)).toEqual(expected);
})


it('Obeys Rule Two: Three neighbors live', () => {
  let worldStart = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
  ];
  let expected = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
  ];
  expect(advance(worldStart)).toEqual(expected);
});

it('Obeys Rule Three: Four neighbors die', () => {
  let worldStart = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
  ];
  let expected = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0],
  ];
  expect(advance(worldStart)).toEqual(expected);
});

it('Obeys Rule Four: Three neighbors breed life', () => {
  let worldStart = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0]
  ];
  let expected = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
  ];
  expect(advance(worldStart)).toEqual(expected);
});

it('Generates a random world.', () => {
  const zeroOrOne = {
    asymmetricMatch: actual => actual === 0 || actual === 1
  };
  let total = 0;
  let testWorld = generateRandomWorld(20, 5);
  expect(testWorld.length).toEqual(20);
  expect(testWorld[0].length).toEqual(5);
  testWorld.forEach(row => {
    expect(row.length).toEqual(5);
    row.forEach(cell => {
      expect(cell).toEqual(zeroOrOne);
      total += cell;
    })
  })
  expect(total).not.toEqual(20 * 5);
  expect(total).not.toEqual(0);
})
