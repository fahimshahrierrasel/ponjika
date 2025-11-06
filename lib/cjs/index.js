/**
 * Ponjika - Bengali Calendar Converter
 * @version 1.2.0
 * @license MIT
 * @author fahimshahrierrasel
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function enToBnNumber(src, prefixZero) {
    if (prefixZero === void 0) { prefixZero = false; }
    var bdNumObj = {
        "1": "১",
        "2": "২",
        "3": "৩",
        "4": "৪",
        "5": "৫",
        "6": "৬",
        "7": "৭",
        "8": "৮",
        "9": "৯",
        "0": "০"
    };
    var numStrArr = src.toString().split("");
    numStrArr.forEach(function (digit, index) {
        numStrArr[index] = bdNumObj[digit];
    });
    var bdNum = numStrArr.join("");
    if (prefixZero && bdNum.length === 1) {
        return bdNumObj["0"] + bdNum;
    }
    return bdNum;
}
var Ponjika = /** @class */ (function () {
    function Ponjika(src, bnPrefixZero) {
        if (src === void 0) { src = new Date(); }
        if (bnPrefixZero === void 0) { bnPrefixZero = true; }
        var _this = this;
        this._bengliMonths = {
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
            Agrahan: "অগ্রহায়ণ"
        };
        this._bengaliWeekDays = {
            Robibar: "রবিবার",
            Sombar: "সোমবার",
            Mongolbar: "মঙ্গলবার",
            Budhbar: "বুধবার",
            Brihospotibar: "বৃহস্পতিবার",
            Shukrobar: "শুক্রবার",
            Shonibar: "শনিবার"
        };
        this._bengliSeasons = {
            Sheet: "শীত",
            Bosonto: "বসন্ত",
            Grismo: "গ্রীষ্ম",
            Borsha: "বর্ষা",
            Sorot: "শরৎ",
            Hemonto: "হেমন্ত"
        };
        this._bengliMonthNo = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
        this._totalDaysInMonth = [30, 30, 29, 30, 31, 31, 31, 31, 31, 31, 30, 30];
        this._midMonthDate = [14, 13, 14, 13, 14, 14, 15, 15, 15, 16, 15, 15];
        this._lastMonthIndex = 3;
        this._leapYearMonthIndex = 2;
        this._date = 0;
        this._month = 0;
        this._year = 0;
        this._bnYear = "";
        this._bnMonth = "";
        this._bnMonthNo = "";
        this._bnDate = "";
        this._bnDay = "";
        this._season = "";
        this._isLeapYear = function (year) {
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        };
        this._toBDTimezone = function (src) {
            var bdEnString = src.toLocaleString("en", {
                timeZone: "Asia/Dhaka"
            });
            return new Date(bdEnString);
        };
        this._getDateMonthYear = function (src) {
            if (src === void 0) { src = _this._refDate; }
            var year = src.getFullYear();
            var month = src.getMonth();
            var date = src.getDate();
            return { date: date, month: month, year: year };
        };
        this._gregorianToBengaliYear = function (year, month, date) {
            // Gregorian Year - 594 Ex. 2022 - 594 = 1428
            var bengaliYear = year - 594;
            if (month > _this._lastMonthIndex ||
                (month === _this._lastMonthIndex && date > 13)) {
                bengaliYear = bengaliYear + 1;
            }
            return bengaliYear;
        };
        this._getBengaliDate = function (src) {
            if (src === void 0) { src = _this._refDate; }
            var bdDate = _this._toBDTimezone(src);
            var _a = _this._getDateMonthYear(bdDate), date = _a.date, month = _a.month, year = _a.year;
            var bengaliYear = _this._gregorianToBengaliYear(year, month, date);
            var monthDays = _this._totalDaysInMonth[month];
            var bengaliDate = 0;
            var bengaliMonth = "";
            var bengaliMonthIndex = 0;
            if (date <= _this._midMonthDate[month]) {
                if (month === _this._leapYearMonthIndex && _this._isLeapYear(year)) {
                    monthDays = _this._totalDaysInMonth[month] + 1;
                }
                bengaliDate = monthDays + date - _this._midMonthDate[month];
                bengaliMonthIndex = month;
                bengaliMonth = Object.keys(_this._bengliMonths)[bengaliMonthIndex];
            }
            else {
                bengaliDate = date - _this._midMonthDate[month];
                bengaliMonthIndex = (month + 1) % 12;
                bengaliMonth = Object.keys(_this._bengliMonths)[bengaliMonthIndex];
            }
            var bengaliSeason = Object.keys(_this._bengliSeasons)[Math.floor(bengaliMonthIndex / 2)];
            _this._year = bengaliYear;
            _this._date = bengaliDate;
            _this._month = _this._bengliMonthNo[bengaliMonthIndex];
            _this._bnYear = enToBnNumber(bengaliYear, _this._bnPrefixZero);
            _this._bnMonth = bengaliMonth;
            _this._bnMonthNo = enToBnNumber(_this._bengliMonthNo[bengaliMonthIndex], _this._bnPrefixZero);
            _this._bnDate = enToBnNumber(bengaliDate, _this._bnPrefixZero);
            _this._bnDay = Object.keys(_this._bengaliWeekDays)[bdDate.getDay()];
            _this._season = bengaliSeason;
        };
        this.getBengaliDate = function () {
            return "".concat(_this._bengaliWeekDays[_this._bnDay], ", ").concat(_this._bnDate, " ").concat(_this._bengliMonths[_this._bnMonth], " ").concat(_this._bnYear);
        };
        this.getBengaliPhoneticDate = function () {
            return "".concat(_this._bnDay, ", ").concat(_this._date, " ").concat(_this._bnMonth, " ").concat(_this._year);
        };
        this.getDateBengaliNumeral = function () {
            return {
                bnDate: _this._bnDate,
                bnMonth: _this._bnMonthNo,
                bnYear: _this._bnYear
            };
        };
        this.getDateNumeral = function () {
            return {
                year: _this._year,
                month: _this._month,
                date: _this._date
            };
        };
        this.getDetails = function () {
            return {
                year: _this._year,
                month: _this._month,
                date: _this._date,
                bnYear: _this._bnYear,
                bnMonthNo: _this._bnMonthNo,
                bnDate: _this._bnDate,
                bnMonth: _this._bengliMonths[_this._bnMonth],
                bnDay: _this._bengaliWeekDays[_this._bnDay],
                season: _this._bengliSeasons[_this._season],
                bnMonthPhn: _this._bnMonth,
                bnDayPhn: _this._bnDay,
                seasonPhn: _this._season
            };
        };
        this._refDate = src;
        this._bnPrefixZero = bnPrefixZero;
        this._getBengaliDate();
    }
    return Ponjika;
}());

exports.Ponjika = Ponjika;
exports.enToBnNumber = enToBnNumber;
//# sourceMappingURL=index.js.map
