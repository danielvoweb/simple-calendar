import data from '../src/data.json';
import sut from '../src/simple-calendar';

test('should create an array of session dates based on number of weeks', () => {
  const actual = sut.calculateSessionDates(data[0]);
  expect(actual.length).toBe(6);
});

test('should calculate session dates weekly for the number of weeks in a session', () => {
  const actual = sut.calculateSessionDates(data[0]);
  expect(actual[0]).toStrictEqual(new Date(2021, 8, 28));
  expect(actual[1]).toStrictEqual(new Date(2021, 8, 28 + 7));
  expect(actual[2]).toStrictEqual(new Date(2021, 8, 28 + 14));
  expect(actual[3]).toStrictEqual(new Date(2021, 8, 28 + 21));
  expect(actual[4]).toStrictEqual(new Date(2021, 8, 28 + 28));
  expect(actual[5]).toStrictEqual(new Date(2021, 8, 28 + 35));
});

test('should get the first day of the month', () => {
  const expectedDay = 5; // Friday
  const date = new Date(2021, 9); // October 2021
  const actual = sut.getFirstDayOfMonth(date);
  expect(actual).toBe(expectedDay);
});

const firstDayOfMonthCases = [
  [3, 2021, 8],
  [5, 2021, 9]
];
test.each(firstDayOfMonthCases)(
  'should get %p as the first day of %p in %p',
  (expectedDay, year, month) => {
    const date = new Date(year, month);
    const actual = sut.getFirstDayOfMonth(date);
    expect(actual).toBe(expectedDay);
  }
);

const daysInMonthCases = [
  [30, 2021, 8],
  [31, 2021, 9]
];
test.each(daysInMonthCases)(
  'should have %p days in %p of %p',
  (expectedDays, year, month) => {
    const date = new Date(year, month);
    const actual = sut.getDaysInMonth(date);
    expect(actual).toBe(expectedDays);
  }
);
