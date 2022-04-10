import { Ponjika } from "./src";
const date = new Date(2022, 2, 14)
const ponjika = new Ponjika(date);

console.log(date.toLocaleString('en'));
console.log(ponjika.getBengaliDate());
