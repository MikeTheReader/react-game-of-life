import { advance } from '../life';

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
    [0, 0, 1, 0],
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
