import sentryInit from './sentry'
import { greet, generateErr } from './app'


sentryInit();
console.log('process env --> ', process.env);
const btn = document.querySelector('#btn') as HTMLElement;
const btn1 = document.querySelector('#btn1') as HTMLElement;

const inp = document.querySelector("#inp") as HTMLInputElement;
btn.addEventListener('click', greet);
btn1.addEventListener('click', generateErr);
