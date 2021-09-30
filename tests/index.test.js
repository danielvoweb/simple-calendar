import data from "../src/data.json";
import sut from "../src/index";

test("should create an array of session dates based on number of weeks", () => {
  const actual = sut.calculateSessionDates(data[0]);
  expect(actual.length).toBe(6);
});

test("should calculate session dates weekly for the number of weeks in a session", () => {
  const actual = sut.calculateSessionDates(data[0]);
  expect(actual[0]).toStrictEqual(new Date(2021, 8, 28));
  expect(actual[1]).toStrictEqual(new Date(2021, 8, 28 + 7));
  expect(actual[2]).toStrictEqual(new Date(2021, 8, 28 + 14));
  expect(actual[3]).toStrictEqual(new Date(2021, 8, 28 + 21));
  expect(actual[4]).toStrictEqual(new Date(2021, 8, 28 + 28));
  expect(actual[5]).toStrictEqual(new Date(2021, 8, 28 + 35));
});
