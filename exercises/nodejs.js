module.exports = [
  {
    id: 'node_1',
    language: 'nodejs',
    title: 'Hello, World!',
    order: 1,
    description: `Every programmer starts here. In Node.js, <code>console.log()</code> prints text to the terminal.

<b>Your task:</b> Print the exact text: <code>Hello, World!</code>`,
    example: `console.log("Nice to meet you!");
// Output: Nice to meet you!

console.log("The year is", 2024);
// Output: The year is 2024`,
    starterCode: `// Print "Hello, World!" below\n`,
    testWrapper: null,
    test: { type: 'stdout', expected: 'Hello, World!' }
  },

  {
    id: 'node_2',
    language: 'nodejs',
    title: 'Variables',
    order: 2,
    description: `Variables store data. Use <code>let</code> for values that can change, <code>const</code> for values that stay fixed.

<b>Your task:</b> Create a variable called <code>greeting</code> with the value <code>"Hello from Node.js!"</code> and print it.`,
    example: `let city = "Tokyo";
console.log(city);
// Output: Tokyo

const year = 2024;
console.log(year);
// Output: 2024`,
    starterCode: `// Create a variable called greeting and print it\n`,
    testWrapper: null,
    test: { type: 'stdout', expected: 'Hello from Node.js!' }
  },

  {
    id: 'node_3',
    language: 'nodejs',
    title: 'Numbers & Math',
    order: 3,
    description: `JavaScript handles math with <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, and <code>%</code> (remainder/modulo).

<b>Your task:</b> <code>a</code> and <code>b</code> are already declared. Print the result of <code>a + b</code>, <code>a - b</code>, <code>a * b</code>, and <code>a % b</code> — each on its own line.

Expected output:
<pre>26
14
120
2</pre>`,
    example: `let x = 10;
let y = 3;
console.log(x + y); // 13
console.log(x % y); // 1  (remainder of 10 / 3)`,
    starterCode: `let a = 20;
let b = 6;

// Print a+b, a-b, a*b, and a%b each on its own line
`,
    testWrapper: null,
    test: { type: 'stdout', expected: '26\n14\n120\n2' }
  },

  {
    id: 'node_4',
    language: 'nodejs',
    title: 'Strings',
    order: 4,
    description: `Strings are text. Join them with <code>+</code> (concatenation).

<b>Your task:</b> Create two variables: <code>firstName = "Ada"</code> and <code>lastName = "Lovelace"</code>. Print them joined with a space: <code>Ada Lovelace</code>`,
    example: `let word1 = "Hello";
let word2 = "World";
console.log(word1 + " " + word2);
// Output: Hello World`,
    starterCode: `// Create firstName and lastName, then print the full name\n`,
    testWrapper: null,
    test: { type: 'stdout', expected: 'Ada Lovelace' }
  },

  {
    id: 'node_5',
    language: 'nodejs',
    title: 'Template Literals',
    order: 5,
    description: `Template literals use backticks and let you embed variables with <code>\${variable}</code>. Much cleaner than <code>+</code> concatenation!

<b>Your task:</b> Use a template literal to print: <code>A cup of coffee costs $3.5</code>`,
    example: `let name = "Alice";
let age = 30;
console.log(\`\${name} is \${age} years old\`);
// Output: Alice is 30 years old`,
    starterCode: `let product = "coffee";
let price = 3.5;

// Use a template literal to print: A cup of coffee costs $3.5
`,
    testWrapper: null,
    test: { type: 'stdout', expected: 'A cup of coffee costs $3.5' }
  },

  {
    id: 'node_6',
    language: 'nodejs',
    title: 'Arrays',
    order: 6,
    description: `Arrays hold lists of items. Access items by index (starting at 0). Use <code>.length</code> to count.

<b>Your task:</b> Print the first fruit, the third fruit, and the number of fruits.

Expected output:
<pre>apple
cherry
3</pre>`,
    example: `let colors = ["red", "green", "blue"];
console.log(colors[0]);      // red
console.log(colors[2]);      // blue
console.log(colors.length);  // 3`,
    starterCode: `let fruits = ["apple", "banana", "cherry"];

// Print the first fruit, third fruit, and total count
`,
    testWrapper: null,
    test: { type: 'stdout', expected: 'apple\ncherry\n3' }
  },

  {
    id: 'node_7',
    language: 'nodejs',
    title: 'Array Methods',
    order: 7,
    description: `Arrays have built-in methods. <code>.push(item)</code> adds to the end. <code>.pop()</code> removes the last item.

<b>Your task:</b>
1. Print the current length of <code>numbers</code>
2. Add the number <code>7</code> with <code>.push()</code>
3. Print the new length

Expected output:
<pre>6
7</pre>`,
    example: `let items = ["a", "b", "c"];
console.log(items.length); // 3
items.push("d");
console.log(items.length); // 4`,
    starterCode: `let numbers = [5, 3, 8, 1, 9, 2];

// 1. Print current length
// 2. Push the number 7
// 3. Print new length
`,
    testWrapper: null,
    test: { type: 'stdout', expected: '6\n7' }
  },

  {
    id: 'node_8',
    language: 'nodejs',
    title: 'Objects',
    order: 8,
    description: `Objects store related data as key-value pairs. Access properties with a dot: <code>object.property</code>.

<b>Your task:</b> Create an object called <code>person</code> with <code>name = "Grace"</code>, <code>age = 31</code>, and <code>hobby = "coding"</code>. Then print: <code>Grace loves coding</code>`,
    example: `let car = {
  brand: "Toyota",
  year: 2020
};
console.log(car.brand);                       // Toyota
console.log(\`\${car.brand} from \${car.year}\`); // Toyota from 2020`,
    starterCode: `// Create the person object with name, age, and hobby
// Then print: "Grace loves coding"
`,
    testWrapper: null,
    test: { type: 'stdout', expected: 'Grace loves coding' }
  },

  {
    id: 'node_9',
    language: 'nodejs',
    title: 'Functions',
    order: 9,
    description: `Functions are reusable blocks of code. Use <code>return</code> to send back a result.

<b>Your task:</b> Write a function <code>greet(name)</code> that returns <code>"Hello, " + name + "!"</code>

The tests call your function automatically — you don't need to call it yourself.`,
    example: `function double(n) {
  return n * 2;
}
console.log(double(5));  // 10
console.log(double(3));  // 6`,
    starterCode: `function greet(name) {
  // Return the greeting string
}
`,
    testWrapper: `console.log(greet("Alice"));
console.log(greet("World"));
console.log(greet("Node.js"));`,
    test: { type: 'stdout', expected: 'Hello, Alice!\nHello, World!\nHello, Node.js!' }
  },

  {
    id: 'node_10',
    language: 'nodejs',
    title: 'Loops',
    order: 10,
    description: `A <code>for</code> loop has three parts: <em>start</em>, <em>condition</em>, <em>step</em>.

<b>Your task:</b> Print the numbers 1 through 10, one per line.`,
    example: `for (let i = 0; i < 3; i++) {
  console.log(i);
}
// Output: 0, 1, 2`,
    starterCode: `// Use a loop to print numbers 1 through 10\n`,
    testWrapper: null,
    test: { type: 'stdout', expected: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10' }
  },

  {
    id: 'node_11',
    language: 'nodejs',
    title: 'If / Else',
    order: 11,
    description: `Use <code>if</code>, <code>else if</code>, and <code>else</code> to make decisions.

<b>Your task:</b> Write a function <code>sign(n)</code> that returns <code>"positive"</code>, <code>"negative"</code>, or <code>"zero"</code>.`,
    example: `function category(score) {
  if (score >= 90)      return "A";
  else if (score >= 70) return "B";
  else                  return "C";
}`,
    starterCode: `function sign(n) {
  // Return "positive", "negative", or "zero"
}
`,
    testWrapper: `console.log(sign(5));
console.log(sign(-3));
console.log(sign(0));
console.log(sign(100));`,
    test: { type: 'stdout', expected: 'positive\nnegative\nzero\npositive' }
  },

  {
    id: 'node_12',
    language: 'nodejs',
    title: 'Mini Project: FizzBuzz',
    order: 12,
    description: `The classic challenge. You have everything you need — loops and conditionals!

<b>Rules:</b>
- Multiples of 3 → <code>Fizz</code>
- Multiples of 5 → <code>Buzz</code>
- Multiples of both → <code>FizzBuzz</code>
- Otherwise → the number

<b>Your task:</b> Print FizzBuzz for 1 through 15.

<i>Check the "both" case first, before 3 and 5 individually!</i>`,
    example: `// % gives the remainder:
console.log(10 % 3); // 1
console.log(9 % 3);  // 0 ← divisible by 3`,
    starterCode: `// FizzBuzz from 1 to 15\n`,
    testWrapper: null,
    test: {
      type: 'stdout',
      expected: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz'
    }
  },

  {
    id: 'node_13',
    language: 'nodejs',
    title: 'Error Handling',
    order: 13,
    description: `Use <code>throw new Error("message")</code> to signal a problem, and <code>try/catch</code> to handle it gracefully.

<b>Your task:</b> Implement <code>divide(a, b)</code> so it:
- Returns <code>a / b</code> normally
- Throws <code>new Error("Cannot divide by zero")</code> if <code>b</code> is 0

The <code>try/catch</code> block below already handles the output — just write the function.`,
    example: `function riskyOp(x) {
  if (x < 0) throw new Error("Negative not allowed");
  return Math.sqrt(x);
}

try {
  console.log(riskyOp(4));  // 2
  console.log(riskyOp(-1)); // throws
} catch (err) {
  console.log(err.message); // "Negative not allowed"
}`,
    starterCode: `function divide(a, b) {
  // If b is 0, throw new Error("Cannot divide by zero")
  // Otherwise return a / b
}

// Don't change below — this tests your function:
try {
  console.log(divide(10, 2));
  console.log(divide(9, 0));
} catch (err) {
  console.log(err.message);
}`,
    testWrapper: null,
    test: { type: 'stdout', expected: '5\nCannot divide by zero' }
  },

  {
    id: 'node_14',
    language: 'nodejs',
    title: 'Array .map()',
    order: 14,
    description: `<code>.map(fn)</code> creates a new array by transforming every element. The original array is unchanged.

<b>Your task:</b> Use <code>.map()</code> to double every number in the array, then print them one per line.

Expected output:
<pre>2
4
6
8
10</pre>`,
    example: `let words = ["hello", "world"];
let upper = words.map(w => w.toUpperCase());
console.log(upper); // ["HELLO", "WORLD"]

// Arrow function shorthand:
// n => n * 2   means   function(n) { return n * 2; }`,
    starterCode: `let numbers = [1, 2, 3, 4, 5];

// Use .map() to create a doubled array
let doubled = numbers.map(/* your function here */);

console.log(doubled.join("\\n"));
`,
    testWrapper: null,
    test: { type: 'stdout', expected: '2\n4\n6\n8\n10' }
  },

  {
    id: 'node_15',
    language: 'nodejs',
    title: 'Array .filter()',
    order: 15,
    description: `<code>.filter(fn)</code> creates a new array containing only elements where the function returns <code>true</code>.

<b>Your task:</b> Filter the words array to keep only words that start with the letter <code>'a'</code>. Print the count, then each word.

Expected output:
<pre>3
apple
ant
avocado</pre>`,
    example: `let nums = [1, 2, 3, 4, 5, 6];
let evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]

// String method: "apple".startsWith("a") → true`,
    starterCode: `let words = ["apple", "ant", "banana", "avocado", "cherry"];

// Filter to keep only words starting with 'a'
let startsWithA = words.filter(/* your function here */);

console.log(startsWithA.length);
console.log(startsWithA.join("\\n"));
`,
    testWrapper: null,
    test: { type: 'stdout', expected: '3\napple\nant\navocado' }
  },

  {
    id: 'node_16',
    language: 'nodejs',
    title: 'Array .reduce()',
    order: 16,
    description: `<code>.reduce(fn, initial)</code> collapses an array into a single value by applying a function cumulatively.

<b>Your task:</b> Use <code>.reduce()</code> to sum all the prices. Print the total rounded to 2 decimal places.

Expected output: <code>65.23</code>`,
    example: `let nums = [1, 2, 3, 4];
// accumulator starts at 0, adds each number:
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10

// .toFixed(2) rounds to 2 decimal places:
console.log((3.14159).toFixed(2)); // "3.14"`,
    starterCode: `let prices = [10.99, 24.50, 5.99, 8.75, 15.00];

// Use .reduce() to sum all prices, print the total with 2 decimal places
let total = prices.reduce(/* your function here */, 0);

console.log(total.toFixed(2));
`,
    testWrapper: null,
    test: { type: 'stdout', expected: '65.23' }
  },

  {
    id: 'node_17',
    language: 'nodejs',
    title: 'Classes',
    order: 17,
    description: `Classes are blueprints for objects. <code>constructor()</code> runs when you create a new instance. <code>this</code> refers to the current instance.

<b>Your task:</b> Complete the <code>Rectangle</code> class:
- <code>constructor(width, height)</code> — store width and height
- <code>area()</code> — returns <code>width × height</code>
- <code>perimeter()</code> — returns <code>2 × (width + height)</code>

Tests call your class automatically.`,
    example: `class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}
const c = new Circle(5);
console.log(c.area().toFixed(2)); // 78.54`,
    starterCode: `class Rectangle {
  constructor(width, height) {
    // Store width and height on 'this'
  }

  area() {
    // Return width * height
  }

  perimeter() {
    // Return 2 * (width + height)
  }
}
`,
    testWrapper: `const r = new Rectangle(4, 5);
console.log(r.area());
console.log(r.perimeter());`,
    test: { type: 'stdout', expected: '20\n18' }
  },

  {
    id: 'node_18',
    language: 'nodejs',
    title: 'Async / Await',
    order: 18,
    description: `<code>async</code> functions always return a Promise. <code>await</code> pauses execution until the Promise resolves. This is how modern JavaScript handles asynchronous work (API calls, file reads, timers).

<b>Your task:</b> Write an <code>async</code> function <code>fetchUser(id)</code> that returns the string <code>"User #" + id</code>.

Tests call it automatically using <code>await</code>.`,
    example: `async function getPrice(item) {
  // async automatically wraps the return in a Promise
  return item + " costs $9.99";
}

// Must use await inside an async function:
async function main() {
  const result = await getPrice("Coffee");
  console.log(result); // Coffee costs $9.99
}
main();`,
    starterCode: `async function fetchUser(id) {
  // Return the string "User #" + id
  // No need to manually create a Promise — async does it for you
}
`,
    testWrapper: `(async () => {
  console.log(await fetchUser(1));
  console.log(await fetchUser(42));
})();`,
    test: { type: 'stdout', expected: 'User #1\nUser #42' }
  },

  {
    id: 'node_19',
    language: 'nodejs',
    title: 'Destructuring',
    order: 19,
    description: `Destructuring extracts values from objects and arrays into variables in one clean line.

<b>Your task:</b>
1. Use <b>object destructuring</b> to extract <code>name</code> and <code>city</code> from <code>person</code>. Print: <code>Alice lives in Tokyo</code>
2. Use <b>array destructuring</b> to get the 1st and 3rd color. Print: <code>red and blue</code>`,
    example: `// Object destructuring:
const { brand, year } = { brand: "Toyota", year: 2020, color: "red" };
console.log(brand); // Toyota

// Array destructuring (skip items with commas):
const [a, , c] = ["one", "two", "three"];
console.log(c); // three`,
    starterCode: `const person = { name: "Alice", age: 30, city: "Tokyo" };
const colors = ["red", "green", "blue"];

// 1. Destructure name and city from person, print "Alice lives in Tokyo"

// 2. Destructure first and third color, print "red and blue"
`,
    testWrapper: null,
    test: { type: 'stdout', expected: 'Alice lives in Tokyo\nred and blue' }
  },

  {
    id: 'node_20',
    language: 'nodejs',
    title: 'Mini Project: Number Analyzer',
    order: 20,
    description: `Put it all together! Use loops, conditionals, and math to build a utility function.

<b>Your task:</b> Write <code>analyze(numbers)</code> that takes an array and returns an object with:
- <code>min</code> — the smallest number
- <code>max</code> — the largest number
- <code>sum</code> — the total of all numbers
- <code>avg</code> — the average, rounded to 1 decimal place

Tests call your function automatically.`,
    example: `// Useful tools:
Math.min(...[3, 1, 4]); // 1
Math.max(...[3, 1, 4]); // 4

// Or use .reduce():
[1,2,3].reduce((a, b) => a + b, 0); // 6

// Round to N decimals:
(5.142857).toFixed(1); // "5.1" (returns a string)
parseFloat("5.1");     // 5.1  (back to number)`,
    starterCode: `function analyze(numbers) {
  // Return an object with min, max, sum, avg
  // avg should be rounded to 1 decimal place
}
`,
    testWrapper: `const result = analyze([4, 7, 2, 9, 1, 5, 8]);
console.log(result.min);
console.log(result.max);
console.log(result.sum);
console.log(result.avg);`,
    test: { type: 'stdout', expected: '1\n9\n36\n5.1' }
  },

  {
    id: 'node_21',
    language: 'nodejs',
    title: 'Closures',
    order: 21,
    description: `A closure is a function that "remembers" variables from its outer scope — even after the outer function has returned. This is a fundamental JavaScript concept.

<b>Your task:</b> Write <code>makeCounter()</code> that returns a function. Each time the returned function is called, it returns the next integer starting from 1.

Tests call your function automatically.`,
    example: `function makeGreeter(greeting) {
  return function(name) {
    return greeting + ", " + name + "!";
  };
}
const hello = makeGreeter("Hello");
console.log(hello("Alice")); // Hello, Alice!
console.log(hello("Bob"));   // Hello, Bob!`,
    starterCode: `function makeCounter() {
  // Return a function that returns 1, then 2, then 3, etc. each call
}
`,
    testWrapper: `const count = makeCounter();
console.log(count());
console.log(count());
console.log(count());`,
    test: { type: 'stdout', expected: '1\n2\n3' }
  },

  {
    id: 'node_22',
    language: 'nodejs',
    title: 'Spread & Rest Operators',
    order: 22,
    description: `The <code>...</code> operator does two related things:
- <b>Spread</b>: expands an array into individual arguments
- <b>Rest</b>: collects multiple arguments into an array

<b>Your task:</b> Write <code>sum(...nums)</code> that accepts any number of arguments and returns their total. Then use spread to call it with an array.

Tests call your function automatically.`,
    example: `// Rest: collect into array
function add(...values) {
  return values.reduce((a, b) => a + b, 0);
}
add(1, 2, 3); // 6

// Spread: expand array into args
const nums = [4, 5, 6];
Math.max(...nums); // 6`,
    starterCode: `function sum(...nums) {
  // Return the total of all arguments
}
`,
    testWrapper: `console.log(sum(1, 2, 3));
console.log(sum(10, 20));
const values = [5, 5, 5, 5];
console.log(sum(...values));`,
    test: { type: 'stdout', expected: '6\n30\n20' }
  },

  {
    id: 'node_23',
    language: 'nodejs',
    title: 'Higher-Order Functions',
    order: 23,
    description: `A higher-order function either takes a function as an argument, or returns one. You've already used them — <code>.map()</code>, <code>.filter()</code>, and <code>.reduce()</code> are all higher-order functions.

<b>Your task:</b> Write <code>applyTwice(fn, value)</code> that applies <code>fn</code> to <code>value</code>, then applies <code>fn</code> again to the result.

Tests call your function automatically.`,
    example: `function repeat(fn, n, value) {
  for (let i = 0; i < n; i++) value = fn(value);
  return value;
}
repeat(x => x * 2, 3, 1); // 8 (1→2→4→8)`,
    starterCode: `function applyTwice(fn, value) {
  // Call fn(value), then call fn on the result
  // Return the final result
}
`,
    testWrapper: `console.log(applyTwice(x => x * 2, 3));
console.log(applyTwice(x => x + 10, 5));
console.log(applyTwice(s => s.toUpperCase(), "hello"));`,
    test: { type: 'stdout', expected: '12\n25\nHELLO' }
  },

  {
    id: 'node_24',
    language: 'nodejs',
    title: 'Recursion',
    order: 24,
    description: `A recursive function calls itself. Every recursive function needs a <b>base case</b> (when to stop) and a <b>recursive case</b> (what to do otherwise).

<b>Your task:</b> Write <code>factorial(n)</code> that returns <code>n!</code> (n × (n-1) × ... × 1). By definition, <code>factorial(0) = 1</code>.

Tests call your function automatically.`,
    example: `function countdown(n) {
  if (n <= 0) return; // base case
  console.log(n);
  countdown(n - 1);  // recursive case
}
countdown(3); // 3, 2, 1

// factorial(4) = 4 * factorial(3)
//              = 4 * 3 * factorial(2)
//              = 4 * 3 * 2 * 1 = 24`,
    starterCode: `function factorial(n) {
  // Base case: factorial(0) = 1
  // Recursive case: n * factorial(n - 1)
}
`,
    testWrapper: `console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(10));`,
    test: { type: 'stdout', expected: '1\n1\n120\n3628800' }
  },

  {
    id: 'node_25',
    language: 'nodejs',
    title: 'Regular Expressions',
    order: 25,
    description: `Regular expressions (regex) match patterns in strings. In JavaScript, use <code>/pattern/flags</code> or <code>new RegExp()</code>.

<b>Your task:</b> Write <code>countVowels(str)</code> that returns the number of vowels (a, e, i, o, u — case-insensitive) in a string.

Tests call your function automatically.`,
    example: `// .match() returns an array of matches (or null)
"Hello".match(/l/g);    // ["l", "l"]
"Hello".match(/z/g);    // null

// /[aeiou]/gi = match any vowel, globally, case-insensitive
"HEllo".match(/[aeiou]/gi); // ["e", "o"]`,
    starterCode: `function countVowels(str) {
  // Count all vowels (a, e, i, o, u) — case insensitive
  // Hint: use .match() with the /g flag, handle the null case
}
`,
    testWrapper: `console.log(countVowels("hello"));
console.log(countVowels("JavaScript"));
console.log(countVowels("rhythm"));
console.log(countVowels("AEIOU"));`,
    test: { type: 'stdout', expected: '2\n3\n0\n5' }
  },

  {
    id: 'node_26',
    language: 'nodejs',
    title: 'Set — Unique Values',
    order: 26,
    description: `A <code>Set</code> is a collection that automatically removes duplicate values. Use it to deduplicate arrays or check membership.

<b>Your task:</b>
1. Create a Set from the <code>numbers</code> array (removes duplicates)
2. Print how many unique numbers there are
3. Print whether <code>7</code> is in the set
4. Print whether <code>99</code> is in the set`,
    example: `const s = new Set([1, 2, 2, 3, 3, 3]);
console.log(s.size);      // 3 (unique values)
console.log(s.has(2));    // true
console.log(s.has(99));   // false

// Convert back to array:
[...s]; // [1, 2, 3]`,
    starterCode: `const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 7];

// 1. Create a Set from numbers
// 2. Print the size (unique count)
// 3. Print whether 7 is in the set
// 4. Print whether 99 is in the set
`,
    testWrapper: null,
    test: { type: 'stdout', expected: '7\ntrue\nfalse' }
  },

  {
    id: 'node_27',
    language: 'nodejs',
    title: 'Map — Key/Value Store',
    order: 27,
    description: `A <code>Map</code> is like an object, but keys can be any type, and it preserves insertion order. Great for counting, caching, and associating data.

<b>Your task:</b> Write <code>wordCount(str)</code> that returns a Map of each word to how many times it appears (lowercase, split by spaces).

Tests call your function automatically.`,
    example: `const m = new Map();
m.set("apple", 3);
m.set("banana", 1);
console.log(m.get("apple")); // 3
console.log(m.has("cherry")); // false
console.log(m.size); // 2`,
    starterCode: `function wordCount(str) {
  const counts = new Map();
  // Split str by spaces, lowercase each word
  // For each word, increment its count in the Map
  // Return the Map
}
`,
    testWrapper: `const result = wordCount("the cat sat on the mat the cat");
console.log(result.get("the"));
console.log(result.get("cat"));
console.log(result.get("mat"));
console.log(result.size);`,
    test: { type: 'stdout', expected: '3\n2\n1\n5' }
  },

  {
    id: 'node_28',
    language: 'nodejs',
    title: 'Promises',
    order: 28,
    description: `A <code>Promise</code> represents a value that will be available in the future. Use <code>new Promise((resolve, reject) => ...)</code> to create one. <code>resolve(value)</code> fulfills it, <code>reject(reason)</code> fails it.

<b>Your task:</b> Write <code>delay(ms, value)</code> that returns a Promise resolving to <code>value</code> after <code>ms</code> milliseconds. Use <code>setTimeout</code>.

Tests call your function automatically using <code>await</code>.`,
    example: `function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// Promise that rejects:
function mustBePositive(n) {
  return new Promise((resolve, reject) => {
    if (n > 0) resolve(n);
    else reject(new Error("Must be positive"));
  });
}`,
    starterCode: `function delay(ms, value) {
  // Return a Promise that resolves with 'value' after 'ms' milliseconds
}
`,
    testWrapper: `(async () => {
  const start = Date.now();
  const result = await delay(50, "done");
  const elapsed = Date.now() - start;
  console.log(result);
  console.log(elapsed >= 40 ? "timing ok" : "too fast");
})();`,
    test: { type: 'stdout', expected: 'done\ntiming ok' }
  },

  {
    id: 'node_29',
    language: 'nodejs',
    title: 'Optional Chaining & Nullish Coalescing',
    order: 29,
    description: `Two modern operators that make working with possibly-missing data much cleaner:
- <code>?.</code> — optional chaining: stops evaluation and returns <code>undefined</code> instead of throwing
- <code>??</code> — nullish coalescing: falls back to the right side only when left is <code>null</code> or <code>undefined</code>

<b>Your task:</b> Use these operators to safely extract user data.`,
    example: `const user = { profile: { name: "Alice" } };
user?.profile?.name;     // "Alice"
user?.address?.street;   // undefined (no error!)

null ?? "default";       // "default"
0 ?? "default";          // 0  (0 is not null/undefined)
undefined ?? "fallback"; // "fallback"`,
    starterCode: `const users = [
  { name: "Alice", address: { city: "Tokyo" } },
  { name: "Bob" },  // no address
  null,
];

// For each user, print their city or "unknown" if missing
// Use ?. and ?? to avoid errors
users.forEach(user => {
  const city = /* user?.address?.city ?? "unknown" */;
  console.log(city);
});
`,
    testWrapper: null,
    test: { type: 'stdout', expected: 'Tokyo\nunknown\nunknown' }
  },

  {
    id: 'node_30',
    language: 'nodejs',
    title: 'Mini Project: Shopping Cart',
    order: 30,
    description: `Build a shopping cart using classes, array methods, and everything you've learned.

<b>Your task:</b> Implement a <code>Cart</code> class with:
- <code>constructor()</code> — initializes an empty <code>items</code> array
- <code>add(name, price, qty)</code> — adds <code>{ name, price, qty }</code> to items
- <code>total()</code> — returns the sum of <code>price * qty</code> for all items, rounded to 2 decimal places
- <code>itemCount()</code> — returns the total quantity of all items

Tests call your class automatically.`,
    example: `// Hint: use .reduce() for totals
items.reduce((sum, item) => sum + item.price * item.qty, 0);

// Number.prototype.toFixed returns a string:
(9.999).toFixed(2); // "10.00"
parseFloat("10.00"); // 10`,
    starterCode: `class Cart {
  constructor() {
    this.items = [];
  }

  add(name, price, qty) {
    // Push { name, price, qty } into this.items
  }

  total() {
    // Return sum of (price * qty) for all items, rounded to 2 decimal places
  }

  itemCount() {
    // Return sum of all qty values
  }
}
`,
    testWrapper: `const cart = new Cart();
cart.add("Apple", 1.50, 3);
cart.add("Bread", 2.99, 1);
cart.add("Milk", 1.25, 2);
console.log(cart.total());
console.log(cart.itemCount());`,
    test: { type: 'stdout', expected: '10.48\n6' }
  }
];
