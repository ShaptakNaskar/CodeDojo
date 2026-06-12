module.exports = [
  {
    id: 'php_1',
    language: 'php',
    title: 'Hello, World!',
    order: 1,
    description: `PHP runs on the server and outputs text. Use <code>echo</code> to print. Every statement ends with <code>;</code>. The opening <code>&lt;?php</code> tag is added for you automatically.

<b>Your task:</b> Print the exact text: <code>Hello, World!</code>`,
    example: `echo "Nice to meet you!";
// Output: Nice to meet you!

echo "The year is " . 2024;
// Output: The year is 2024`,
    starterCode: `// Print "Hello, World!"\n`,
    testWrapper: null,
    test: { type: 'stdout', expected: 'Hello, World!' }
  },

  {
    id: 'php_2',
    language: 'php',
    title: 'Variables',
    order: 2,
    description: `PHP variables always start with <code>$</code>. No type declaration needed — just assign.

<b>Your task:</b> Create <code>$language = "PHP"</code> and print: <code>I am learning PHP</code>`,
    example: `$name = "Alice";
echo $name;
// Output: Alice`,
    starterCode: `// Create $language and print "I am learning PHP"\n`,
    testWrapper: null,
    test: { type: 'stdout', expected: 'I am learning PHP' }
  },

  {
    id: 'php_3',
    language: 'php',
    title: 'String Concatenation',
    order: 3,
    description: `In PHP, join strings with a dot <code>.</code> (not <code>+</code> like JavaScript).

<b>Your task:</b> Create <code>$firstName = "Ada"</code> and <code>$lastName = "Lovelace"</code>. Print: <code>Ada Lovelace</code>`,
    example: `$word1 = "Hello";
$word2 = "World";
echo $word1 . " " . $word2;
// Output: Hello World`,
    starterCode: `// Create $firstName and $lastName, then print the full name\n`,
    testWrapper: null,
    test: { type: 'stdout', expected: 'Ada Lovelace' }
  },

  {
    id: 'php_4',
    language: 'php',
    title: 'Numbers & Math',
    order: 4,
    description: `PHP arithmetic: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>. Identical to JavaScript.

<b>Your task:</b> Print <code>$a + $b</code>, <code>$a - $b</code>, <code>$a * $b</code>, and <code>$a % $b</code>, each on its own line.

Expected output:
<pre>26
14
120
2</pre>`,
    example: `$x = 10;
$y = 3;
echo $x + $y; echo "\\n"; // 13
echo $x % $y; echo "\\n"; // 1`,
    starterCode: `$a = 20;
$b = 6;

// Print a+b, a-b, a*b, a%b each on its own line
// Example: echo $a + $b; echo "\\n";
`,
    testWrapper: null,
    test: { type: 'stdout', expected: '26\n14\n120\n2' }
  },

  {
    id: 'php_5',
    language: 'php',
    title: 'String Interpolation',
    order: 5,
    description: `PHP double-quoted strings can embed variables directly — no concatenation needed. This is called interpolation.

<b>Your task:</b> Print: <code>A cup of coffee costs $3.5</code>

Use a double-quoted string with the variables inside.`,
    example: `$name = "Alice";
$age = 30;
echo "$name is $age years old";
// Output: Alice is 30 years old`,
    starterCode: `$product = "coffee";
$price = 3.5;

// Print: A cup of coffee costs $3.5
`,
    testWrapper: null,
    test: { type: 'stdout', expected: 'A cup of coffee costs $3.5' }
  },

  {
    id: 'php_6',
    language: 'php',
    title: 'Arrays',
    order: 6,
    description: `PHP arrays use square brackets. Access by index (starts at 0). Use <code>count()</code> for the length.

<b>Your task:</b> Print the first fruit, the third fruit, and the count.

Expected output:
<pre>apple
cherry
3</pre>`,
    example: `$colors = ["red", "green", "blue"];
echo $colors[0];     // red
echo $colors[2];     // blue
echo count($colors); // 3`,
    starterCode: `$fruits = ["apple", "banana", "cherry"];

// Print first fruit, third fruit, and count
`,
    testWrapper: null,
    test: { type: 'stdout', expected: 'apple\ncherry\n3' }
  },

  {
    id: 'php_7',
    language: 'php',
    title: 'Associative Arrays',
    order: 7,
    description: `PHP's associative arrays use string keys with <code>=></code> — like objects in JavaScript.

<b>Your task:</b> Create <code>$person</code> with keys <code>name</code>, <code>age</code>, <code>city</code> set to <code>"Grace"</code>, <code>31</code>, <code>"Tokyo"</code>. Print: <code>Grace is 31 from Tokyo</code>`,
    example: `$car = [
    "brand" => "Toyota",
    "year"  => 2020
];
echo $car["brand"]; // Toyota
echo "{$car['year']}"; // 2020`,
    starterCode: `// Create $person associative array with name, age, city
// Then print: "Grace is 31 from Tokyo"
`,
    testWrapper: null,
    test: { type: 'stdout', expected: 'Grace is 31 from Tokyo' }
  },

  {
    id: 'php_8',
    language: 'php',
    title: 'Functions',
    order: 8,
    description: `PHP functions use the <code>function</code> keyword. Parameters work like variables inside.

<b>Your task:</b> Write <code>greet($name)</code> that returns <code>"Hello, " . $name . "!"</code>

Tests call your function automatically.`,
    example: `function double($n) {
    return $n * 2;
}
echo double(5);  // 10`,
    starterCode: `function greet($name) {
    // Return the greeting string
}
`,
    testWrapper: `echo greet("Alice") . "\\n";
echo greet("World") . "\\n";
echo greet("PHP") . "\\n";`,
    test: { type: 'stdout', expected: 'Hello, Alice!\nHello, World!\nHello, PHP!' }
  },

  {
    id: 'php_9',
    language: 'php',
    title: 'Loops',
    order: 9,
    description: `PHP has <code>for</code>, <code>while</code>, and <code>foreach</code> loops. The <code>for</code> syntax is identical to JavaScript.

<b>Your task:</b> Print numbers 1 through 10, one per line.`,
    example: `for ($i = 0; $i < 3; $i++) {
    echo $i . "\\n";
}
// Output: 0, 1, 2

// foreach for arrays:
$items = ["a", "b", "c"];
foreach ($items as $item) {
    echo $item . "\\n";
}`,
    starterCode: `// Use a loop to print numbers 1 through 10\n`,
    testWrapper: null,
    test: { type: 'stdout', expected: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10' }
  },

  {
    id: 'php_10',
    language: 'php',
    title: 'Mini Project: FizzBuzz',
    order: 10,
    description: `Combine loops and conditionals. Identical logic to the JavaScript version — just different syntax.

<b>Rules:</b> Multiples of 3 → <code>Fizz</code>, 5 → <code>Buzz</code>, both → <code>FizzBuzz</code>, else the number.

<b>Your task:</b> Print FizzBuzz for 1 through 15.`,
    example: `if ($n % 15 === 0) {
    echo "FizzBuzz\\n";
} elseif ($n % 3 === 0) {
    echo "Fizz\\n";
} // ...`,
    starterCode: `// FizzBuzz from 1 to 15\n`,
    testWrapper: null,
    test: {
      type: 'stdout',
      expected: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz'
    }
  },

  {
    id: 'php_11',
    language: 'php',
    title: 'String Functions',
    order: 11,
    description: `PHP has a huge standard library. Key string functions you'll use constantly:
- <code>strtoupper($s)</code> — uppercase
- <code>strlen($s)</code> — character count
- <code>str_replace($find, $replace, $s)</code> — find and replace
- <code>trim($s)</code> — remove leading/trailing whitespace

<b>Your task:</b> Given <code>$text = "Hello, World!"</code>, print:
1. The uppercased version
2. Its length
3. With "World" replaced by "PHP"

Expected output:
<pre>HELLO, WORLD!
13
Hello, PHP!</pre>`,
    example: `$s = "  hello  ";
echo trim($s);           // "hello"
echo strtolower("ABC");  // "abc"
echo strlen("hi");       // 2`,
    starterCode: `$text = "Hello, World!";

// 1. Print uppercase version
// 2. Print length
// 3. Print with "World" replaced by "PHP"
`,
    testWrapper: null,
    test: { type: 'stdout', expected: 'HELLO, WORLD!\n13\nHello, PHP!' }
  },

  {
    id: 'php_12',
    language: 'php',
    title: 'Array Functions',
    order: 12,
    description: `PHP array functions: <code>sort()</code> sorts in place, <code>implode($sep, $arr)</code> joins elements, <code>array_push()</code> appends, <code>count()</code> counts.

<b>Your task:</b> Given the fruits array:
1. Sort it alphabetically (sorts in place)
2. Print all fruits joined with <code>", "</code>
3. Print the count
4. Push <code>"dragonfruit"</code>
5. Print the new count

Expected output:
<pre>apple, banana, cherry
3
4</pre>`,
    example: `$nums = [3, 1, 2];
sort($nums);
echo implode("-", $nums); // 1-2-3

array_push($nums, 4);
echo count($nums);        // 4`,
    starterCode: `$fruits = ["banana", "apple", "cherry"];

// 1. sort($fruits) — sorts in place
// 2. echo implode(", ", $fruits) . "\\n"
// 3. echo count($fruits) . "\\n"
// 4. array_push($fruits, "dragonfruit")
// 5. echo count($fruits) . "\\n"
`,
    testWrapper: null,
    test: { type: 'stdout', expected: 'apple, banana, cherry\n3\n4' }
  },

  {
    id: 'php_13',
    language: 'php',
    title: 'Classes',
    order: 13,
    description: `PHP classes use <code>class</code>, <code>__construct()</code>, <code>$this->property</code>, and <code>-></code> to access methods.

<b>Your task:</b> Write a class <code>Animal</code> with:
- <code>__construct($name, $sound)</code>
- <code>speak()</code> method that returns <code>"$name says $sound!"</code>

Tests call your class automatically.`,
    example: `class Car {
    public $brand;
    public function __construct($brand) {
        $this->brand = $brand;
    }
    public function describe() {
        return "This is a {$this->brand}";
    }
}
$c = new Car("Toyota");
echo $c->describe(); // This is a Toyota`,
    starterCode: `class Animal {
    // Add properties and constructor

    public function speak() {
        // Return "$name says $sound!"
    }
}
`,
    testWrapper: `$dog = new Animal("Dog", "Woof");
$cat = new Animal("Cat", "Meow");
echo $dog->speak() . "\\n";
echo $cat->speak() . "\\n";`,
    test: { type: 'stdout', expected: 'Dog says Woof!\nCat says Meow!' }
  },

  {
    id: 'php_14',
    language: 'php',
    title: 'Error Handling',
    order: 14,
    description: `PHP uses <code>throw new Exception("message")</code> and <code>try/catch</code> — very similar to JavaScript.

<b>Your task:</b> Implement <code>divide($a, $b)</code> so it:
- Returns <code>$a / $b</code> normally
- Throws <code>new Exception("Cannot divide by zero")</code> if <code>$b</code> is 0

The <code>try/catch</code> block is already written — just implement the function.`,
    example: `function mustBePositive($n) {
    if ($n <= 0) {
        throw new Exception("Must be positive");
    }
    return sqrt($n);
}

try {
    echo mustBePositive(4) . "\\n";  // 2
    echo mustBePositive(-1) . "\\n"; // throws
} catch (Exception $e) {
    echo $e->getMessage() . "\\n";   // Must be positive
}`,
    starterCode: `function divide($a, $b) {
    // If $b is 0, throw new Exception("Cannot divide by zero")
    // Otherwise return $a / $b
}

// Don't change below — this tests your function:
try {
    echo divide(10, 2) . "\\n";
    echo divide(9, 0) . "\\n";
} catch (Exception $e) {
    echo $e->getMessage() . "\\n";
}`,
    testWrapper: null,
    test: { type: 'stdout', expected: '5\nCannot divide by zero' }
  },

  {
    id: 'php_15',
    language: 'php',
    title: 'Mini Project: Password Validator',
    order: 15,
    description: `Build a real utility function using string functions and conditionals.

<b>Your task:</b> Write <code>isStrongPassword($password)</code> that returns <code>true</code> if ALL these are met:
- At least 8 characters long
- Contains at least one uppercase letter (<code>A-Z</code>)
- Contains at least one number (<code>0-9</code>)

Returns <code>false</code> otherwise.

<i>Tip: <code>preg_match('/[A-Z]/', $s)</code> checks for uppercase. <code>preg_match('/[0-9]/', $s)</code> checks for a digit.</i>

Tests run automatically.`,
    example: `// strlen() gets length:
strlen("hello"); // 5

// preg_match returns 1 (match) or 0 (no match):
preg_match('/[0-9]/', "abc123"); // 1
preg_match('/[0-9]/', "abcdef"); // 0`,
    starterCode: `function isStrongPassword($password) {
    // Return true if:
    // - length >= 8
    // - contains at least one uppercase letter
    // - contains at least one number
    // Otherwise return false
}
`,
    testWrapper: `$tests = [
    ["weak",          false],
    ["NoNumbers!",    false],
    ["nonumbers123",  false],
    ["Strong1!",      true],
    ["Passw0rd",      true],
];
foreach ($tests as [$pass, $expected]) {
    $result = isStrongPassword($pass);
    echo ($result === $expected ? "pass" : "fail") . "\\n";
}`,
    test: { type: 'stdout', expected: 'pass\npass\npass\npass\npass' }
  },

  {
    id: 'php_16',
    language: 'php',
    title: 'foreach on Associative Arrays',
    order: 16,
    description: `The <code>foreach</code> loop has a special form for associative arrays: <code>foreach ($arr as $key => $value)</code>. This lets you access both the key and value in each iteration.

<b>Your task:</b> Loop over the <code>$scores</code> array and print each student's name and grade using the format: <code>Alice: 92</code>`,
    example: `$prices = ["apple" => 1.5, "banana" => 0.75];
foreach ($prices as $item => $price) {
    echo "$item costs $$price\\n";
}
// apple costs $1.5
// banana costs $0.75`,
    starterCode: `$scores = [
    "Alice" => 92,
    "Bob"   => 85,
    "Carol" => 97,
];

// Print each as "Name: score"
`,
    testWrapper: null,
    test: { type: 'stdout', expected: 'Alice: 92\nBob: 85\nCarol: 97' }
  },

  {
    id: 'php_17',
    language: 'php',
    title: 'array_map & array_filter',
    order: 17,
    description: `PHP has functional array tools similar to JavaScript's <code>.map()</code> and <code>.filter()</code>:
- <code>array_map($fn, $arr)</code> — transforms each element
- <code>array_filter($arr, $fn)</code> — keeps elements where <code>$fn</code> returns true
- <code>array_values()</code> — re-indexes after filtering

<b>Your task:</b>
1. Use <code>array_map</code> to double each number. Print them joined by comma.
2. Use <code>array_filter</code> to keep only even numbers. Print them joined by comma.

Expected output:
<pre>2,4,6,8,10
2,4</pre>`,
    example: `$words = ["hello", "world"];
$upper = array_map('strtoupper', $words);
echo implode(", ", $upper); // HELLO, WORLD

$nums = [1, 2, 3, 4, 5];
$evens = array_filter($nums, fn($n) => $n % 2 === 0);
echo implode(", ", $evens); // 2, 4`,
    starterCode: `$numbers = [1, 2, 3, 4, 5];

// 1. Double each number with array_map, print joined by comma
$doubled = array_map(/* fn($n) => $n * 2 */, $numbers);
echo implode(",", $doubled) . "\\n";

// 2. Keep only even numbers with array_filter, print joined by comma
$evens = array_filter($numbers, /* fn($n) => $n % 2 === 0 */);
echo implode(",", $evens) . "\\n";
`,
    testWrapper: null,
    test: { type: 'stdout', expected: '2,4,6,8,10\n2,4' }
  },

  {
    id: 'php_18',
    language: 'php',
    title: 'Anonymous Functions',
    order: 18,
    description: `PHP supports anonymous functions (also called lambdas or closures). Modern PHP 7.4+ supports arrow functions with <code>fn($x) => expression</code> syntax — similar to JavaScript's arrow functions.

<b>Your task:</b> Create a <code>$multiply</code> variable holding an anonymous function that multiplies two numbers. Then use it to compute some values.`,
    example: `// Traditional anonymous function:
$double = function($n) {
    return $n * 2;
};
echo $double(5); // 10

// Arrow function (PHP 7.4+):
$triple = fn($n) => $n * 3;
echo $triple(4); // 12

// Closures can capture outer variables:
$factor = 10;
$scale = fn($n) => $n * $factor;
echo $scale(5); // 50`,
    starterCode: `// Create $multiply as an anonymous function that takes ($a, $b)
// and returns $a * $b

$multiply = fn($a, $b) => /* your expression here */;

echo $multiply(3, 4) . "\\n";
echo $multiply(7, 6) . "\\n";
echo $multiply(2, 2) . "\\n";
`,
    testWrapper: null,
    test: { type: 'stdout', expected: '12\n42\n4' }
  },

  {
    id: 'php_19',
    language: 'php',
    title: 'Type Juggling & Casting',
    order: 19,
    description: `PHP is loosely typed — it automatically converts types in many contexts. You can also cast explicitly with <code>(int)</code>, <code>(float)</code>, <code>(string)</code>, <code>(bool)</code>.

<b>Your task:</b> Use explicit casts and print the results to understand PHP's type system.`,
    example: `// Implicit conversion:
echo "5" + 3;      // 8  (string "5" becomes int 5)
echo 3.7 + 1;      // 4.7

// Explicit casts:
(int)"42abc";      // 42
(int)3.9;          // 3  (truncated, not rounded)
(bool)"";          // false
(bool)"0";         // false
(bool)"false";     // true (non-empty string)
(string)true;      // "1"
(string)false;     // ""`,
    starterCode: `// Print the result of each cast:
echo (int)"42abc" . "\\n";      // int cast of a string starting with digits
echo (int)3.9 . "\\n";          // int cast truncates (does not round)
echo (float)"3.14xyz" . "\\n";  // float cast
echo (string)true . "\\n";      // bool true as string
echo (int)true . "\\n";         // bool true as int
`,
    testWrapper: null,
    test: { type: 'stdout', expected: '42\n3\n3.14\n1\n1' }
  },

  {
    id: 'php_20',
    language: 'php',
    title: 'match Expression',
    order: 20,
    description: `PHP 8 introduced <code>match</code> — a cleaner alternative to <code>switch</code>. It uses strict comparison (<code>===</code>), returns a value directly, and throws an error if no arm matches.

<b>Your task:</b> Write <code>httpStatus($code)</code> that returns the message for common HTTP status codes using a <code>match</code> expression.

Tests call your function automatically.`,
    example: `$role = "admin";
$access = match($role) {
    "admin"  => "full access",
    "editor" => "write access",
    "viewer" => "read only",
    default  => "no access",
};
echo $access; // full access`,
    starterCode: `function httpStatus($code) {
    return match($code) {
        200 => "OK",
        201 => "Created",
        404 => "Not Found",
        500 => "Internal Server Error",
        // Add a default case: "Unknown"
    };
}
`,
    testWrapper: `echo httpStatus(200) . "\\n";
echo httpStatus(201) . "\\n";
echo httpStatus(404) . "\\n";
echo httpStatus(500) . "\\n";
echo httpStatus(999) . "\\n";`,
    test: { type: 'stdout', expected: 'OK\nCreated\nNot Found\nInternal Server Error\nUnknown' }
  },

  {
    id: 'php_21',
    language: 'php',
    title: 'Number Formatting',
    order: 21,
    description: `PHP provides handy functions for formatting numbers:
- <code>number_format($n, $decimals)</code> — formats with commas and decimals
- <code>round($n, $decimals)</code> — rounds to N decimal places
- <code>ceil($n)</code> / <code>floor($n)</code> — round up / round down

<b>Your task:</b> Given <code>$price = 1234567.891</code>, print:
1. Formatted with 2 decimals and comma separators
2. Rounded to 1 decimal
3. Ceiling (rounded up to nearest integer)
4. Floor (rounded down to nearest integer)

Expected output:
<pre>1,234,567.89
1234567.9
1234568
1234567</pre>`,
    example: `echo number_format(1234.5, 2);  // 1,234.50
echo round(3.567, 2);           // 3.57
echo ceil(4.1);                 // 5
echo floor(4.9);                // 4`,
    starterCode: `$price = 1234567.891;

// 1. number_format with 2 decimals
// 2. round to 1 decimal
// 3. ceil
// 4. floor
`,
    testWrapper: null,
    test: { type: 'stdout', expected: '1,234,567.89\n1234567.9\n1234568\n1234567' }
  },

  {
    id: 'php_22',
    language: 'php',
    title: 'Mini Project: Invoice Generator',
    order: 22,
    description: `Combine arrays, loops, string formatting, and math to build a real-world utility.

<b>Your task:</b> Write <code>generateInvoice($items)</code> that takes an array of <code>["name", price, qty]</code> items and returns a formatted invoice string.

Format each line as: <code>Item Name        $XX.XX</code> (name padded to 16 chars)
End with a <code>TOTAL: $XX.XX</code> line.

Tests call your function automatically.`,
    example: `// str_pad() pads a string to a given length:
str_pad("Apple", 10);        // "Apple     "
str_pad("Apple", 10, ".", STR_PAD_RIGHT); // "Apple....."

// number_format formats numbers:
number_format(9.5, 2);       // "9.50"`,
    starterCode: `function generateInvoice($items) {
    $lines = [];
    $total = 0;

    foreach ($items as [$name, $price, $qty]) {
        $lineTotal = $price * $qty;
        $total += $lineTotal;
        // Format: name padded to 16 chars + "$" + number_format(lineTotal, 2)
        $lines[] = str_pad($name, 16) . "$" . number_format($lineTotal, 2);
    }

    $lines[] = "TOTAL:          $" . number_format($total, 2);
    return implode("\\n", $lines);
}
`,
    testWrapper: `$items = [
    ["Coffee", 3.50, 2],
    ["Sandwich", 6.99, 1],
    ["Water", 1.25, 3],
];
echo generateInvoice($items) . "\\n";`,
    test: {
      type: 'stdout',
      expected: 'Coffee          $7.00\nSandwich        $6.99\nWater           $3.75\nTOTAL:          $17.74'
    }
  }
];
