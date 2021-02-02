// No jQuery in Node
// can only run one file at a time in node
// running servers with node

//Pull data from another file
let cullenites = require('./cullenites.js');

for (let student of cullenites) {
  console.log(`Welcome to node week, ${student}`);
}

let age = 29;
if (age > 23) {
  console.log('you are an old man');
}

function birthday() {
  age++;
  return age;
}

console.log(`Happy birthday to you! You are, ${birthday()}`);
console.log(`Happy birthday to you! You are, ${birthday()}`);
console.log(`Happy birthday to you! You are, ${birthday()}`);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

function headsOrTails() {
  let heads = 1;
  let tails = 2;

  let flipResult = randomNumber(heads, tails);

  if (flipResult === 1) {
    return 'its heads!';
  } else {
    return 'its tails!';
  }
}

console.log(headsOrTails());
console.log(headsOrTails());
console.log(headsOrTails());
console.log(headsOrTails());
console.log(headsOrTails());
console.log(headsOrTails());
