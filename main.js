const fibonacci = require('./fibonacci');

const promptSync = require('prompt-sync');
const prompt = promptSync();
let number = prompt('Ingrese un número: ');
fibonacci.sequence(number);