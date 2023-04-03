const fibonacci = require('./fibonacci');

const promptSync = require('prompt-sync');
const prompt = promptSync();
console.log('')
let number = prompt('Ingrese un número: ');
fibonacci.sequence(number);