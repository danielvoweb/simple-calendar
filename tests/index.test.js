import data from '../src/data.json';
import sut from '../src/index';

test('should do the thing', () => {
  const actual = sut.calculateSessionDates(data[0]);
  expect(actual.length).toBe(6);
});

test('should do another thing', () => {
  const actual = sut.calculateSessionDates(data[0]);
  expect(actual[0]).toBe(new Date(2021, 8, 28));
});
