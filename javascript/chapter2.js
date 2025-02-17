#!/usr/bin/env node

// exercise 1
let count = 0;
let string = "";
do {
  string+="#";
  console.log(string);
  count++;
} while (count < 7);

// exercise 2
for (let i=0; i <= 100; i++) {
  if (i%3 === 0) {
    console.log("Fizz");
  } else if (i%5 === 0 && i%3 !== 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}

// excecise 3
let chessstring = "";
let bounds = 12
for (let y=0; y < bounds; y++) {
  for (let x=0; x < bounds; x++) {
    if ((x + y % 2) % 2 == 0) {
      chessstring += " ";
    } else {
      chessstring += "#";
    }
  }
  chessstring += "\n";
}
console.log(chessstring);
