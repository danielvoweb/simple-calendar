import data from "../src/data.json";
import sut from "../src/simple-calendar";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

test("should create an array of session dates based on number of weeks", () => {
  const actual = sut.calculateSessionDates(data[0]);
  expect(actual.length).toBe(6);
});

// Uses the month name to improve test case readability
const calculatedSessionDateCases = [
  [0, months[8], 2021, 28, 0],
  [1, months[8], 2021, 28, 7],
  [2, months[8], 2021, 28, 14],
  [3, months[8], 2021, 28, 21],
  [4, months[8], 2021, 28, 28],
  [5, months[8], 2021, 28, 35],
];

test.each(calculatedSessionDateCases)(
  "should calculate session %p to %p %p and %p date plus %p days",
  (sessionIndex, expectedMonth, expectedYear, startDate, dateOffset) => {
    const actual = sut.calculateSessionDates(data[0]);
    const expectedDate = startDate + dateOffset;
    expect(actual[sessionIndex]).toStrictEqual(
      new Date(expectedYear, months.indexOf(expectedMonth), expectedDate)
    );
  }
);

// Uses the day name and month name to improve test case readabilty
const firstDayOfMonthCases = [
  [days[3], months[8], 2021],
  [days[5], months[9], 2021],
];
test.each(firstDayOfMonthCases)(
  "should get %p as the first day of %p in %p",
  (expectedDay, month, year) => {
    const date = new Date(year, months.indexOf(month));
    const actual = sut.getFirstDayOfMonth(date);
    expect(actual).toBe(days.indexOf(expectedDay));
  }
);

// Uses the month name to improve test case readability
const daysInMonthCases = [
  [30, months[8], 2021],
  [31, months[9], 2021],
  [28, months[1], 2021],
  // Next leap year case
  [29, months[1], 2024],
];
test.each(daysInMonthCases)(
  "should have %p days in %p %p",
  (expectedDays, month, year) => {
    const date = new Date(year, months.indexOf(month));
    const actual = sut.getDaysInMonth(date);
    expect(actual).toBe(expectedDays);
  }
);

const weeksInMonthCases = [
  [5, months[8], 2021],
  // Case where first day adds a week to month display
  [5, months[1], 2021],
];

test.each(weeksInMonthCases)(
  "should have %p weeks in %p %p, based on first day of the month",
  (expectedWeeks, month, year) => {
    const date = new Date(year, months.indexOf(month));
    const weeksInMonth = sut.getWeeksInMonth(date);
    expect(expectedWeeks).toBe(weeksInMonth);
  }
);
