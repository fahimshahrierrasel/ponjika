# Ponjika

Bengali(Bangladeshi) ponjika based on Gregorian date.

> This package will only work from 2019 and onwards

[![npm version](https://img.shields.io/npm/v/ponjika.svg)](https://www.npmjs.com/package/ponjika)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**[Live Demo](https://fahimshahrierrasel.github.io/ponjika/)** | See the library in action!

## Features

- 🗓️ Convert Gregorian dates to Bengali calendar dates
- 🌍 Multi-runtime support: Node.js, Browser, Deno, Bun
- 📦 Zero dependencies
- 🎯 TypeScript support with full type definitions
- 🌳 Tree-shakeable ES modules
- 🔄 Multiple output formats (UMD, ESM, CJS)
- ⚡ Lightweight and fast

## Installation

### Node.js / Bun

```bash
npm install ponjika
```

or

```bash
yarn add ponjika
```

or

```bash
bun add ponjika
```

### Deno

```typescript
import { Ponjika } from "npm:ponjika";
```

or from a CDN:

```typescript
import { Ponjika } from "https://esm.sh/ponjika";
```

### Browser

#### Via CDN (UMD)

```html
<script src="https://unpkg.com/ponjika@latest/lib/index.js"></script>
<script>
  const ponjika = new window.ponjika.Ponjika();
  console.log(ponjika.getBengaliDate());
</script>
```

#### Via CDN (ES Module)

```html
<script type="module">
  import { Ponjika } from 'https://unpkg.com/ponjika@latest/lib/esm/index.js';

  const ponjika = new Ponjika();
  console.log(ponjika.getBengaliDate());
</script>
```

## Usage

### Node.js (CommonJS)

```javascript
const { Ponjika } = require("ponjika");

const ponjika = new Ponjika(new Date(2024, 3, 14));
console.log(ponjika.getBengaliDate());
// Output: রবিবার, ০১ বৈশাখ ১৪৩১
```

### Node.js / Bun (ES Modules)

```javascript
import { Ponjika } from "ponjika";

const ponjika = new Ponjika(new Date(2024, 3, 14));
console.log(ponjika.getBengaliDate());
// Output: রবিবার, ০১ বৈশাখ ১৪৩১
```

### TypeScript

```typescript
import { Ponjika, IPonjika } from "ponjika";

const ponjika = new Ponjika(new Date(2024, 3, 14));
const details: IPonjika = ponjika.getDetails();
console.log(details);
```

### Deno

```typescript
import { Ponjika } from "npm:ponjika";

const ponjika = new Ponjika(new Date(2024, 3, 14));
console.log(ponjika.getBengaliDate());
```

### Browser

```html
<!DOCTYPE html>
<html>
<head>
  <title>Ponjika Demo</title>
</head>
<body>
  <h1 id="bengali-date"></h1>

  <script src="https://unpkg.com/ponjika@latest/lib/index.js"></script>
  <script>
    const ponjika = new window.ponjika.Ponjika();
    document.getElementById('bengali-date').textContent = ponjika.getBengaliDate();
  </script>
</body>
</html>
```

## Example

```javascript
import { Ponjika } from "ponjika";

const ponjika = new Ponjika(new Date(2024, 3, 14));

console.log(ponjika.getDetails());
```

Output:

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

## API Reference

### Ponjika Class

#### Constructor

```typescript
new Ponjika(date?: Date, bnPrefixZero?: boolean)
```

- `date` (optional): JavaScript Date object. Defaults to current date.
- `bnPrefixZero` (optional): Whether to prefix zero to Bengali numerals. Defaults to `true`.

#### Methods

##### `getBengaliDate()`

Returns a formatted Bengali date string.

```javascript
ponjika.getBengaliDate();
// Returns: "বৃহস্পতিবার, ০১ বৈশাখ ১৪২৯"
```

##### `getBengaliPhoneticDate()`

Returns a phonetic (English letters) Bengali date string.

```javascript
ponjika.getBengaliPhoneticDate();
// Returns: "Brihospotibar, 1 Boisakh 1429"
```

##### `getDateBengaliNumeral()`

Returns date components in Bengali numerals.

```javascript
ponjika.getDateBengaliNumeral();
// Returns: { bnDate: '০১', bnMonth: '০১', bnYear: '১৪২৯' }
```

##### `getDateNumeral()`

Returns date components as numbers.

```javascript
ponjika.getDateNumeral();
// Returns: { year: 1429, month: 1, date: 1 }
```

##### `getDetails()`

Returns complete information about the Bengali date.

```javascript
ponjika.getDetails();
// Returns:
// {
//   year: 1429,
//   month: 1,
//   date: 1,
//   bnYear: '১৪২৯',
//   bnMonthNo: '০১',
//   bnDate: '০১',
//   bnMonth: 'বৈশাখ',
//   bnDay: 'বৃহস্পতিবার',
//   season: 'গ্রীষ্ম',
//   bnMonthPhn: 'Boisakh',
//   bnDayPhn: 'Brihospotibar',
//   seasonPhn: 'Grismo'
// }
```

### Utility Functions

#### `enToBnNumber(number, prefixZero?)`

Converts English numerals to Bengali numerals.

```javascript
import { enToBnNumber } from "ponjika";

enToBnNumber(123);        // Returns: "১২৩"
enToBnNumber(5, true);    // Returns: "০৫"
enToBnNumber(5, false);   // Returns: "৫"
```

## Runtime Compatibility

This package is compatible with:

- **Node.js** 12+ (CommonJS & ES Modules)
- **Browsers** (Modern browsers with ES5+ support)
- **Deno** (via npm: specifier or CDN)
- **Bun** (native support)
- **TypeScript** (full type definitions included)

The package uses conditional exports to provide the optimal bundle for each environment:

- **Browser**: UMD build (`lib/index.js`)
- **Node.js ESM**: ES Module build (`lib/esm/index.js`)
- **Node.js CJS**: CommonJS build (`lib/cjs/index.js`)
- **Deno/Bun**: ES Module build (`lib/esm/index.js`)

## TypeScript Interfaces

```typescript
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
```

### Credit
This package is ported from [ponjika(go)](https://github.com/thedevsaddam/ponjika).
