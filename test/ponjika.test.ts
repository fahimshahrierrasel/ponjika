import { Ponjika } from "../src/index";

test("First Boishakh", () => {
  const ponjika = new Ponjika(new Date(2022, 3, 14));
  const { year, month, date } = ponjika.getDateNumeral();
  expect(date).toBe(1);
  expect(month).toBe(1);
  expect(year).toBe(1429);
});

test.each([
  [new Date(Date.UTC(2022, 3, 1)), { date: 18, month: 12, year: 1428 }],
  [new Date(Date.UTC(2022, 3, 14)), { date: 1, month: 1, year: 1429 }],
  [new Date(Date.UTC(2022, 4, 1)), { date: 18, month: 1, year: 1429 }],
  [new Date(Date.UTC(2022, 4, 15)), { date: 1, month: 2, year: 1429 }],
  [new Date(Date.UTC(2022, 5, 1)), { date: 18, month: 2, year: 1429 }],
  [new Date(Date.UTC(2022, 5, 15)), { date: 1, month: 3, year: 1429 }],
  [new Date(Date.UTC(2022, 6, 1)), { date: 17, month: 3, year: 1429 }],
  [new Date(Date.UTC(2022, 6, 16)), { date: 1, month: 4, year: 1429 }],
  [new Date(Date.UTC(2022, 7, 1)), { date: 17, month: 4, year: 1429 }],
  [new Date(Date.UTC(2022, 7, 16)), { date: 1, month: 5, year: 1429 }],
  [new Date(Date.UTC(2022, 8, 1)), { date: 17, month: 5, year: 1429 }],
  [new Date(Date.UTC(2022, 8, 16)), { date: 1, month: 6, year: 1429 }],
  [new Date(Date.UTC(2022, 9, 1)), { date: 16, month: 6, year: 1429 }],
  [new Date(Date.UTC(2022, 9, 17)), { date: 1, month: 7, year: 1429 }],
  [new Date(Date.UTC(2022, 10, 1)), { date: 16, month: 7, year: 1429 }],
  [new Date(Date.UTC(2022, 10, 17)), { date: 2, month: 8, year: 1429 }],
  [new Date(Date.UTC(2022, 11, 1)), { date: 16, month: 8, year: 1429 }],
  [new Date(Date.UTC(2022, 11, 16)), { date: 1, month: 9, year: 1429 }],
  [new Date(Date.UTC(2023, 0, 1)), { date: 17, month: 9, year: 1429 }],
  [new Date(Date.UTC(2023, 0, 15)), { date: 1, month: 10, year: 1429 }],
  [new Date(Date.UTC(2023, 1, 1)), { date: 18, month: 10, year: 1429 }],
  [new Date(Date.UTC(2023, 1, 14)), { date: 1, month: 11, year: 1429 }],
  [new Date(Date.UTC(2023, 2, 1)), { date: 16, month: 11, year: 1429 }],
  [new Date(Date.UTC(2023, 2, 15)), { date: 1, month: 12, year: 1429 }],
  [new Date(Date.UTC(2023, 3, 1)), { date: 18, month: 12, year: 1429 }],
  [new Date(Date.UTC(2023, 3, 14)), { date: 1, month: 1, year: 1430 }],
  [new Date(Date.UTC(2023, 4, 1)), { date: 18, month: 1, year: 1430 }],
  [new Date(Date.UTC(2023, 4, 15)), { date: 1, month: 2, year: 1430 }],
  [new Date(Date.UTC(2023, 5, 1)), { date: 18, month: 2, year: 1430 }],
  [new Date(Date.UTC(2023, 5, 15)), { date: 1, month: 3, year: 1430 }],
  [new Date(Date.UTC(2023, 6, 1)), { date: 17, month: 3, year: 1430 }],
  [new Date(Date.UTC(2023, 6, 16)), { date: 1, month: 4, year: 1430 }],
  [new Date(Date.UTC(2023, 7, 1)), { date: 17, month: 4, year: 1430 }],
  [new Date(Date.UTC(2023, 7, 16)), { date: 1, month: 5, year: 1430 }],
  [new Date(Date.UTC(2023, 8, 1)), { date: 17, month: 5, year: 1430 }],
  [new Date(Date.UTC(2023, 8, 16)), { date: 1, month: 6, year: 1430 }],
  [new Date(Date.UTC(2023, 9, 1)), { date: 16, month: 6, year: 1430 }],
  [new Date(Date.UTC(2023, 9, 17)), { date: 1, month: 7, year: 1430 }],
  [new Date(Date.UTC(2023, 10, 1)), { date: 16, month: 7, year: 1430 }],
  [new Date(Date.UTC(2023, 10, 17)), { date: 2, month: 8, year: 1430 }],
  [new Date(Date.UTC(2023, 11, 1)), { date: 16, month: 8, year: 1430 }],
  [new Date(Date.UTC(2023, 11, 16)), { date: 1, month: 9, year: 1430 }],
  [new Date(Date.UTC(2024, 0, 1)), { date: 17, month: 9, year: 1430 }],
  [new Date(Date.UTC(2024, 0, 15)), { date: 1, month: 10, year: 1430 }],
  [new Date(Date.UTC(2024, 1, 1)), { date: 18, month: 10, year: 1430 }],
  [new Date(Date.UTC(2024, 1, 14)), { date: 1, month: 11, year: 1430 }],
  [new Date(Date.UTC(2024, 2, 1)), { date: 17, month: 11, year: 1430 }],
  [new Date(Date.UTC(2024, 2, 15)), { date: 1, month: 12, year: 1430 }],
])("%s", (i, expected) => {
  const ponjika = new Ponjika(i);
  const { year, month, date } = ponjika.getDateNumeral();
  expect(year).toBe(expected.year);
  expect(month).toBe(expected.month);
  expect(date).toBe(expected.date);
});
