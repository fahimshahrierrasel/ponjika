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
declare function enToBnNumber(src: number, prefixZero?: boolean): string;
declare class Ponjika {
    private _bengliMonths;
    private _bengaliWeekDays;
    private _bengliSeasons;
    private _bengliMonthNo;
    private _totalDaysInMonth;
    private _midMonthDate;
    private _lastMonthIndex;
    private _leapYearMonthIndex;
    private _refDate;
    private _bnPrefixZero;
    private _date;
    private _month;
    private _year;
    private _bnYear;
    private _bnMonth;
    private _bnMonthNo;
    private _bnDate;
    private _bnDay;
    private _season;
    constructor(src?: Date, bnPrefixZero?: boolean);
    private _isLeapYear;
    private _toBDTimezone;
    private _getDateMonthYear;
    private _gregorianToBengaliYear;
    private _getBengaliDate;
    getBengaliDate: () => string;
    getBengaliPhoneticDate: () => string;
    getDateBengaliNumeral: () => IDateBengaliNumeral;
    getDateNumeral: () => IDateNumeral;
    getDetails: () => IPonjika;
}
export { enToBnNumber, Ponjika };
