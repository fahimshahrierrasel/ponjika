# Ponjika

Bengali(Bangladeshi) ponjika based on Gregorian date.

> This package will only work from 2019 and onwards

### Installation
Install the package
```bash
$ npm install ponjika
```

### Usage
Import the package on your `*.js/*.ts` file
```javascript
import { Ponjika } from "ponjika";
```

### Example
```javascript
import { Ponjika } from "ponjika";

const ponjika = new Ponjika(new Date(2024, 3, 14));

console.log(ponjika.getDetails());
```
Output
```javascript
{
  year: 1431,
  month: 1,
  date: 1,
  bnYear: '১৪৩১',
  bnMonthNo: '০১',
  bnDate: '০১',
  bnMonth: 'বৈশাখ',
  bnDay: 'রবিবার',
  season: 'গ্রীষ্ম',
  bnMonthPhn: 'Boisakh',
  bnDayPhn: 'Robibar',
  seasonPhn: 'Grismo'
}
```

### APIs
* `getBengaliDate()`
```
বৃহস্পতিবার, ০১ বৈশাখ ১৪২৯
```
* `getBengaliPhoneticDate()`
```
Brihospotibar, 1 Boisakh 1429
```
* `getDateBengaliNumeral()`
```javascript
{ bnDate: '০১', bnMonth: '০১', bnYear: '১৪২৯' }
```
* `getDateNumeral()`
```javascript
{ year: 1429, month: 1, date: 1 }
```
* `getDetails()`
```javascript
{
  year: 1429,
  month: 1,
  date: 1,
  bnYear: '১৪২৯',
  bnMonthNo: '০১',
  bnDate: '০১',
  bnMonth: 'বৈশাখ',
  bnDay: 'বৃহস্পতিবার',
  season: 'গ্রীষ্ম',
  bnMonthPhn: 'Boisakh',
  bnDayPhn: 'Brihospotibar',
  seasonPhn: 'Grismo'
}
```

### Credit
This package is ported from [ponjika(go)](https://github.com/thedevsaddam/ponjika).
