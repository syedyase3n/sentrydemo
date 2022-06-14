import sentryInit from './sentry'
import { display, generateErr } from './app'

sentryInit();

const btn = document.querySelector('#btn') as HTMLElement;
const btn1 = document.querySelector('#btn1') as HTMLElement;

btn.addEventListener('click', display);
btn1.addEventListener('click', generateErr);
