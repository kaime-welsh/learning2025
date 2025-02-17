#!/usr/bin/env node

// Chapter 2
//================================
// exercise 1
let count = 0;
let string = "";
do {
  string += "#";
  console.log(string);
  count++;
} while (count < 7);

// exercise 2
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}

// exercise 3
let chessstring = "";
let bounds = 12;
for (let y = 0; y < bounds; y++) {
  for (let x = 0; x < bounds; x++) {
    if ((x + (y % 2)) % 2 == 0) {
      chessstring += " ";
    } else {
      chessstring += "#";
    }
  }
  chessstring += "\n";
}
console.log(chessstring);

// Chapter 3
//================================
// exercise 1
function min(a, b) {
  return a < b ? a : b;
}
console.log(min(0, 10));
console.log(min(0, -10));

// exercise 2
function isEven(n) {
  if (Math.abs(n) % 2 == 0) {
    return true;
  } else if (Math.abs(n) % 2 == 1) {
    return false;
  } else {
    return isEven(Math.abs(n) - 2);
  }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-2));

// exercise 3
function countBs(input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "B") {
      count++;
    }
  }
  return count;
}

function countChar(input, filter) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === filter) {
      count++;
    }
  }
  return count;
}

console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));
