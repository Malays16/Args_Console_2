#!/usr/bin/env node
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const min = 0;
const max = 100;
const hiddenNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Загадано число в диапазоне от ${min} до ${max}`);

rl.setPrompt('Введите число: ');
rl.prompt();

rl.on('line', (input) => {
  const inputNumber = Number(input.trim());

  if (isNaN(inputNumber)) {
    console.log('Введите допустимое число.');
  } else if (inputNumber < hiddenNumber) {
    console.log('Больше');
  } else if (inputNumber > hiddenNumber) {
    console.log('Меньше');
  } else {
    console.log(`Отгадано число ${hiddenNumber}`);
    rl.close();
  }

  rl.prompt();
}).on('close', () => {
  console.log('Игра окончена.');
  process.exit(0);
});