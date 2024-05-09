#!/usr/bin/env node
import readlineSync from 'readline-sync';
import isEven from '../src/iseven.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

isEven(name);
