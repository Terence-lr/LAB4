// Part 1: Fizz Buzz using a for loop
console.log('=== Part 1: Fizz Buzz ===')

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('Fizz Buzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}
console.log('\n')

// Part 2: Prime Time using a while loop
console.log('=== Part 2: Prime Time ===')

let n = 4 // You can change this value to test
let foundPrime = false
let candidate = n + 1

while (!foundPrime) {
  let isPrime = true
  for (let i = 2; i <= Math.sqrt(candidate); i++) {
    if (candidate % i === 0) {
      isPrime = false
      break
    }
  }
  if (isPrime) {
    console.log(`The next prime after ${n} is: ${candidate}`)
    foundPrime = true
  }
  candidate++
}
console.log('\n')

// Part 3: CSV Parsing using for...of loop
console.log('=== Part 3: CSV Parsing ===')

let csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`

let cell = ''
let row = []

for (const char of csvData) {
  if (char === ',') {
    row.push(cell)
    cell = ''
  } else if (char === '\n') {
    row.push(cell)
    console.log(...row)
    row = []
    cell = ''
  } else {
    cell += char
  }
}

// Handle any remaining data without a newline
if (cell) {
  row.push(cell)
  console.log(...row)
}

console.log('\n')

// Additional Test CSV Data using for...of loop
console.log('=== Additional CSV Test Data ===')

let testCsv = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`

cell = ''
row = []

for (const char of testCsv) {
  if (char === ',') {
    row.push(cell)
    cell = ''
  } else if (char === '\n') {
    row.push(cell)
    console.log(...row)
    row = []
    cell = ''
  } else {
    cell += char
  }
}

// Handle any remaining data without a newline
if (cell) {
  row.push(cell)
  console.log(...row)
}
