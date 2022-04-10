interface IDateBengaliNumeral {
  bnYear: string;
  bnMonth: string;
  bnDate: string;
}

interface IDateNumeral {
  year: number;
  month: number;
  date: number;
}

interface IPonjika {
  year: number;
  month: number;
  date: number;
  bnYear: string;
  bnMonthNo: string;
  bnDate: string;
  bnMonth: string;
  bnDay: string;
  season: string;
  bnMonthPhn: string;
  bnDayPhn: string;
  seasonPhn: string;
}

interface IObjType {
  [key: string]: string;
}

export function enToBnNumber(src: number, prefixZero: boolean = false): string {
  const bdNumObj: { [key: string]: string } = {
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
    "0": "০",
  };

  const numStrArr = src.toString().split("");

  numStrArr.forEach((digit, index) => {
    numStrArr[index] = bdNumObj[digit];
  });

  const bdNum = numStrArr.join("");

  if (prefixZero && bdNum.length === 1) {
    return bdNumObj["0"] + bdNum;
  }
  return bdNum;
}

export class Ponjika {
  private _bengliMonths: IObjType = {
    Poush: "পৌষ",
    Maagh: "মাঘ",
    Falgun: "ফাল্গুন",
    Chaitra: "চৈত্র",
    Boisakh: "বৈশাখ",
    Joistho: "জ্যৈষ্ঠ",
    Ashar: "আষাঢ়",
    Shraban: "শ্রাবণ",
    Vadro: "ভাদ্র",
    Ashin: "আশ্বিন",
    Kartik: "কার্তিক",
    Agrahan: "অগ্রহায়ণ",
  };

  private _bengaliWeekDays: IObjType = {
    Robibar: "রবিবার",
    Sombar: "সোমবার",
    Mongolbar: "মঙ্গলবার",
    Budhbar: "বুধবার",
    Brihospotibar: "বৃহস্পতিবার",
    Shukrobar: "শুক্রবার",
    Shonibar: "শনিবার",
  };

  private _bengliSeasons: IObjType = {
    Sheet: "শীত",
    Bosonto: "বসন্ত",
    Grismo: "গ্রীষ্ম",
    Borsha: "বর্ষা",
    Sorot: "শরৎ",
    Hemonto: "হেমন্ত",
  };

  private _bengliMonthNo = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
  private _totalDaysInMonth = [30, 30, 29, 30, 31, 31, 31, 31, 31, 31, 30, 30];
  private _midMonthDate = [14, 13, 14, 13, 14, 14, 15, 15, 15, 16, 15, 15];
  private _lastMonthIndex = 3;
  private _leapYearMonthIndex = 2;

  private _refDate: Date;
  private _bnPrefixZero: boolean;
  private _date: number = 0;
  private _month: number = 0;
  private _year: number = 0;
  private _bnYear: string = "";
  private _bnMonth: string = "";
  private _bnMonthNo: string = "";
  private _bnDate: string = "";
  private _bnDay: string = "";
  private _season: string = "";

  constructor(src: Date = new Date(), bnPrefixZero: boolean = true) {
    this._refDate = src;
    this._bnPrefixZero = bnPrefixZero;
    this._getBengaliDate();
  }

  private _isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  private _toBDTimezone = (src: Date): Date => {
    const bdEnString = src.toLocaleString("en", {
      timeZone: "Asia/Dhaka",
    });
    return new Date(bdEnString);
  };

  private _getDateMonthYear = (src: Date = this._refDate) => {
    const year = src.getFullYear();
    const month = src.getMonth();
    const date = src.getDate();

    return { date, month, year };
  };

  private _gregorianToBengaliYear = (
    year: number,
    month: number,
    date: number
  ): number => {
    // Gregorian Year - 594 Ex. 2022 - 594 = 1428
    let bengaliYear = year - 594;

    if (
      month > this._lastMonthIndex ||
      (month === this._lastMonthIndex && date > 13)
    ) {
      bengaliYear = bengaliYear + 1;
    }
    return bengaliYear;
  };

  private _getBengaliDate = (src: Date = this._refDate) => {
    const bdDate = this._toBDTimezone(src);
    const { date, month, year } = this._getDateMonthYear(bdDate);
    const bengaliYear = this._gregorianToBengaliYear(year, month, date);

    let monthDays = this._totalDaysInMonth[month];
    let bengaliDate = 0;
    let bengaliMonth = "";
    let bengaliMonthIndex = 0;

    if (date <= this._midMonthDate[month]) {
      if (month === this._leapYearMonthIndex && this._isLeapYear(year)) {
        monthDays = this._totalDaysInMonth[month] + 1;
      }
      bengaliDate = monthDays + date - this._midMonthDate[month];
      bengaliMonthIndex = month;
      bengaliMonth = Object.keys(this._bengliMonths)[bengaliMonthIndex];
    } else {
      bengaliDate = date - this._midMonthDate[month];
      bengaliMonthIndex = (month + 1) % 12;
      bengaliMonth = Object.keys(this._bengliMonths)[bengaliMonthIndex];
    }
    const bengaliSeason = Object.keys(this._bengliSeasons)[
      Math.floor(bengaliMonthIndex / 2)
    ];

    this._year = bengaliYear;
    this._date = bengaliDate;
    this._month = this._bengliMonthNo[bengaliMonthIndex];
    this._bnYear = enToBnNumber(bengaliYear, this._bnPrefixZero);
    this._bnMonth = bengaliMonth;
    this._bnMonthNo = enToBnNumber(
      this._bengliMonthNo[bengaliMonthIndex],
      this._bnPrefixZero
    );
    this._bnDate = enToBnNumber(bengaliDate, this._bnPrefixZero);
    this._bnDay = Object.keys(this._bengaliWeekDays)[bdDate.getDay()];
    this._season = bengaliSeason;
  };

  getBengaliDate = (): string => {
    return `${this._bengaliWeekDays[this._bnDay]}, ${this._bnDate} ${
      this._bengliMonths[this._bnMonth]
    } ${this._bnYear}`;
  };

  getBengaliPhoneticDate = (): string => {
    return `${this._bnDay}, ${this._date} ${this._bnMonth} ${this._year}`;
  };

  getDateBengaliNumeral = (): IDateBengaliNumeral => {
    return {
      bnDate: this._bnDate,
      bnMonth: this._bnMonthNo,
      bnYear: this._bnYear,
    } as IDateBengaliNumeral;
  };

  getDateNumeral = (): IDateNumeral => {
    return {
      year: this._year,
      month: this._month,
      date: this._date,
    } as IDateNumeral;
  };

  getDetails = (): IPonjika => {
    return {
      year: this._year,
      month: this._month,
      date: this._date,
      bnYear: this._bnYear,
      bnMonthNo: this._bnMonthNo,
      bnDate: this._bnDate,
      bnMonth: this._bengliMonths[this._bnMonth],
      bnDay: this._bengaliWeekDays[this._bnDay],
      season: this._bengliSeasons[this._season],
      bnMonthPhn: this._bnMonth,
      bnDayPhn: this._bnDay,
      seasonPhn: this._season,
    } as IPonjika;
  };
}
