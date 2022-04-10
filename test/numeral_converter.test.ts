import { enToBnNumber } from "../src/index";

describe("Numeral Converter", () => {
  const testCases: { [key: number]: string } = {
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
    0: "০",
    2018: "২০১৮",
    2022: "২০২২",
  };

  it("Enlish 2022 to Bengali", () => {
    const num = 2022;
    const actual = enToBnNumber(num);
    const expected = testCases[num];
    expect(actual).toBe(expected);
  });

  it("Enlish 01 to Bengali", () => {
    const num = 1;
    const actual = enToBnNumber(num, true);
    const expected = "০১";
    expect(actual).toBe(expected);
  });
});
