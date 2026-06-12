// SQL exercises run against a pre-seeded SQLite database:
//
// users:    id, name, age, email, city
// products: id, name, price, category
// orders:   id, user_id, product_id, quantity, order_date

module.exports = [
  {
    id: 'sql_1',
    language: 'sql',
    title: 'SELECT Everything',
    order: 1,
    description: `SQL (Structured Query Language) lets you talk to databases. The most basic command is <code>SELECT</code>. The <code>*</code> means "all columns".

<b>Your task:</b> Select ALL rows and ALL columns from the <code>users</code> table.`,
    example: `-- This selects everything from products:
SELECT * FROM products;`,
    starterCode: `-- Select all columns from the users table\n`,
    test: { type: 'sql_rows', rowCount: 7 }
  },

  {
    id: 'sql_2',
    language: 'sql',
    title: 'SELECT Specific Columns',
    order: 2,
    description: `Name the exact columns you want instead of <code>*</code>. Cleaner and faster in real apps.

<b>Your task:</b> Select only the <code>name</code> and <code>city</code> columns from <code>users</code>.`,
    example: `-- Only name and price from products:
SELECT name, price FROM products;`,
    starterCode: `-- Select only name and city from users\n`,
    test: {
      type: 'sql_columns',
      rowCount: 7,
      requiredColumns: ['name', 'city'],
      forbiddenColumns: ['email', 'age']
    }
  },

  {
    id: 'sql_3',
    language: 'sql',
    title: 'WHERE Clause',
    order: 3,
    description: `<code>WHERE</code> filters rows. Only matching rows are returned.

<b>Your task:</b> Select all users older than 28.

You should get 4 users: Alice (30), Carol (35), Frank (45), and Grace (31).`,
    example: `-- Products under $50:
SELECT * FROM products WHERE price < 50;

-- Operators: =  !=  >  <  >=  <=`,
    starterCode: `-- Select all users where age is greater than 28\n`,
    test: {
      type: 'sql_rows',
      rowCount: 4,
      containsValues: [{ name: 'Alice' }, { name: 'Carol' }, { name: 'Frank' }, { name: 'Grace' }]
    }
  },

  {
    id: 'sql_4',
    language: 'sql',
    title: 'WHERE with Text',
    order: 4,
    description: `Filter by text values. Text must be in <b>single quotes</b>.

<b>Your task:</b> Select all products in the <code>'Electronics'</code> category. You should get 3 products: Laptop, Headphones, Monitor.`,
    example: `-- Users from Tokyo:
SELECT * FROM users WHERE city = 'Tokyo';

-- Note: use single quotes, not double quotes`,
    starterCode: `-- Select all products where category is 'Electronics'\n`,
    test: {
      type: 'sql_rows',
      rowCount: 3,
      containsValues: [{ name: 'Laptop' }, { name: 'Monitor' }]
    }
  },

  {
    id: 'sql_5',
    language: 'sql',
    title: 'ORDER BY',
    order: 5,
    description: `<code>ORDER BY</code> sorts results. <code>ASC</code> = ascending (A→Z, 0→9). <code>DESC</code> = descending.

<b>Your task:</b> Select all users ordered by <code>age</code> youngest to oldest. The first row should be Eve (age 22).`,
    example: `-- Products most to least expensive:
SELECT * FROM products ORDER BY price DESC;

-- Users alphabetically:
SELECT * FROM users ORDER BY name ASC;`,
    starterCode: `-- Select all users ordered by age (youngest first)\n`,
    test: {
      type: 'sql_ordered',
      rowCount: 7,
      firstRow: { name: 'Eve' },
      lastRow: { name: 'Frank' }
    }
  },

  {
    id: 'sql_6',
    language: 'sql',
    title: 'LIMIT',
    order: 6,
    description: `<code>LIMIT</code> caps how many rows are returned. Usually combined with <code>ORDER BY</code> to get the "top N".

<b>Your task:</b> Get the 3 most expensive products ordered by price descending.

Expected: Laptop ($999.99), Monitor ($299.99), Headphones ($79.99)`,
    example: `-- Top 5 cheapest products:
SELECT * FROM products ORDER BY price ASC LIMIT 5;`,
    starterCode: `-- Select the 3 most expensive products\n`,
    test: {
      type: 'sql_rows',
      rowCount: 3,
      containsValues: [{ name: 'Laptop' }, { name: 'Monitor' }]
    }
  },

  {
    id: 'sql_7',
    language: 'sql',
    title: 'COUNT & GROUP BY',
    order: 7,
    description: `<code>COUNT(*)</code> counts rows. <code>GROUP BY</code> groups rows before counting — so you get a count <em>per group</em>.

<b>Your task:</b> Count how many users are in each city. Name the count column <code>total</code>.

Expected: 4 rows (New York, London, Tokyo, Paris).`,
    example: `-- Products per category:
SELECT category, COUNT(*) as total
FROM products
GROUP BY category;`,
    starterCode: `-- Count users grouped by city, name the count "total"\n`,
    test: { type: 'sql_rows', rowCount: 4 }
  },

  {
    id: 'sql_8',
    language: 'sql',
    title: 'AVG & SUM',
    order: 8,
    description: `More aggregates: <code>AVG()</code> calculates the average, <code>SUM()</code> adds values up. <code>ROUND(value, 2)</code> rounds to 2 decimals.

<b>Your task:</b> Calculate the average price per product category. Name the column <code>avg_price</code>, round to 2 decimals.

Expected: 3 rows (Electronics, Kitchen, Stationery).`,
    example: `-- Total and average salary per department:
SELECT dept, SUM(salary) as total, ROUND(AVG(salary), 2) as avg
FROM employees
GROUP BY dept;`,
    starterCode: `-- Average price per category (round to 2 decimals, name it avg_price)\n`,
    test: {
      type: 'sql_rows',
      rowCount: 3,
      containsValues: [{ category: 'Electronics' }, { category: 'Kitchen' }, { category: 'Stationery' }]
    }
  },

  {
    id: 'sql_9',
    language: 'sql',
    title: 'INSERT Data',
    order: 9,
    description: `<code>INSERT INTO</code> adds new rows. List columns, then provide matching values.

<b>Your task:</b> Add a new user:
- id: <code>8</code>, name: <code>'Henry'</code>, age: <code>27</code>, email: <code>'henry@example.com'</code>, city: <code>'Berlin'</code>`,
    example: `-- Add a new product:
INSERT INTO products (id, name, price, category)
VALUES (8, 'Keyboard', 59.99, 'Electronics');`,
    starterCode: `-- Insert Henry into the users table\n`,
    test: {
      type: 'sql_dml',
      verifyQuery: 'SELECT COUNT(*) as count FROM users',
      expectedCount: 8
    }
  },

  {
    id: 'sql_10',
    language: 'sql',
    title: 'JOIN Tables',
    order: 10,
    description: `<code>JOIN</code> combines rows from multiple tables by matching keys. This is one of SQL's most powerful features.

<b>Your task:</b> Show the name of each user alongside the product they ordered. You'll need two JOINs.

Return columns named <code>user_name</code> and <code>product_name</code>.`,
    example: `-- Basic JOIN:
SELECT a.name, b.title
FROM table_a a
JOIN table_b b ON a.id = b.a_id;

-- ON says which columns link the tables`,
    starterCode: `-- Join orders with users and products
-- Return: user_name, product_name
`,
    test: {
      type: 'sql_rows',
      rowCount: 8,
      requiredColumns: ['user_name', 'product_name']
    }
  },

  {
    id: 'sql_11',
    language: 'sql',
    title: 'UPDATE Data',
    order: 11,
    description: `<code>UPDATE</code> modifies existing rows. <b>Always use WHERE</b> — without it, you'd update every row in the table!

<b>Your task:</b> Update Bob's city to <code>'Berlin'</code>.

<i>Tip: Use <code>WHERE name = 'Bob'</code> to target only Bob's row.</i>`,
    example: `-- Change price of product with id 3:
UPDATE products SET price = 39.99 WHERE id = 3;

-- Change multiple columns at once:
UPDATE users SET age = 26, city = 'Paris' WHERE id = 2;`,
    starterCode: `-- Update Bob's city to 'Berlin'\n`,
    test: {
      type: 'sql_dml',
      verifyQuery: `SELECT city FROM users WHERE name = 'Bob'`,
      checkFirstRow: { city: 'Berlin' }
    }
  },

  {
    id: 'sql_12',
    language: 'sql',
    title: 'DELETE Data',
    order: 12,
    description: `<code>DELETE FROM</code> removes rows. Like UPDATE, <b>always use WHERE</b> — a bare DELETE removes everything!

<b>Your task:</b> Delete the user with <code>id = 5</code> (that's Eve). After deletion there should be 6 users.`,
    example: `-- Delete a product by id:
DELETE FROM products WHERE id = 7;

-- Delete all cheap products:
DELETE FROM products WHERE price < 10;`,
    starterCode: `-- Delete the user with id = 5\n`,
    test: {
      type: 'sql_dml',
      verifyQuery: 'SELECT COUNT(*) as count FROM users',
      expectedCount: 6
    }
  },

  {
    id: 'sql_13',
    language: 'sql',
    title: 'LIKE — Pattern Matching',
    order: 13,
    description: `<code>LIKE</code> matches text patterns. <code>%</code> matches any sequence of characters.

<b>Your task:</b> Find all users whose name contains the letter <code>'a'</code> (LIKE is case-insensitive in SQLite).

You should get 5 users: Alice, Carol, David, Frank, Grace.`,
    example: `-- Names starting with 'A':
SELECT * FROM users WHERE name LIKE 'A%';

-- Names ending with 'n':
SELECT * FROM users WHERE name LIKE '%n';

-- Names containing 'ob':
SELECT * FROM users WHERE name LIKE '%ob%';`,
    starterCode: `-- Find all users whose name contains the letter 'a'\n`,
    test: {
      type: 'sql_rows',
      rowCount: 5,
      containsValues: [{ name: 'Alice' }, { name: 'Carol' }, { name: 'Frank' }]
    }
  },

  {
    id: 'sql_14',
    language: 'sql',
    title: 'AND / OR Conditions',
    order: 14,
    description: `Combine multiple conditions with <code>AND</code> (both must be true) or <code>OR</code> (either can be true).

<b>Your task:</b> Find users who are from <code>'Tokyo'</code> AND older than 28.

You should get 2 users: Carol (35) and Grace (31).`,
    example: `-- Users from London who are adults:
SELECT * FROM users WHERE city = 'London' AND age >= 18;

-- Users from Paris or Tokyo:
SELECT * FROM users WHERE city = 'Paris' OR city = 'Tokyo';`,
    starterCode: `-- Find users from Tokyo who are older than 28\n`,
    test: {
      type: 'sql_rows',
      rowCount: 2,
      containsValues: [{ name: 'Carol' }, { name: 'Grace' }]
    }
  },

  {
    id: 'sql_15',
    language: 'sql',
    title: 'HAVING — Filter on Aggregates',
    order: 15,
    description: `<code>WHERE</code> filters individual rows. <code>HAVING</code> filters <em>groups</em> after a <code>GROUP BY</code>.

<b>Your task:</b> Find cities that have more than 1 user. Show the city name and user count.

Expected: 3 cities (New York, London, Tokyo each have 2 users; Paris has 1).`,
    example: `-- Categories with more than 2 products:
SELECT category, COUNT(*) as total
FROM products
GROUP BY category
HAVING COUNT(*) > 2;

-- Rule of thumb: WHERE before GROUP BY, HAVING after`,
    starterCode: `-- Find cities with more than 1 user
-- Show: city name and the count
`,
    test: {
      type: 'sql_rows',
      rowCount: 3
    }
  },

  {
    id: 'sql_16',
    language: 'sql',
    title: 'DISTINCT — Remove Duplicates',
    order: 16,
    description: `<code>DISTINCT</code> removes duplicate values from a result set. Great for finding unique values in a column.

<b>Your task:</b> Select all unique cities from the <code>users</code> table. You should get 4 unique cities.`,
    example: `-- All unique categories:
SELECT DISTINCT category FROM products;

-- Unique city + country combos:
SELECT DISTINCT city, country FROM locations;`,
    starterCode: `-- Select all unique cities from users\n`,
    test: {
      type: 'sql_rows',
      rowCount: 4
    }
  },

  {
    id: 'sql_17',
    language: 'sql',
    title: 'IN — Match a List',
    order: 17,
    description: `<code>IN</code> checks if a value matches any item in a list. Much cleaner than multiple <code>OR</code> conditions.

<b>Your task:</b> Select all users who live in <code>'Tokyo'</code> or <code>'Paris'</code> or <code>'Berlin'</code>.

You should get 3 users: Carol, Eve, and Grace.`,
    example: `-- Products in specific categories:
SELECT * FROM products
WHERE category IN ('Kitchen', 'Stationery');

-- Equivalent to:
WHERE category = 'Kitchen' OR category = 'Stationery'`,
    starterCode: `-- Select users from Tokyo, Paris, or Berlin using IN\n`,
    test: {
      type: 'sql_rows',
      rowCount: 3,
      containsValues: [{ name: 'Carol' }, { name: 'Eve' }, { name: 'Grace' }]
    }
  },

  {
    id: 'sql_18',
    language: 'sql',
    title: 'BETWEEN — Range Filter',
    order: 18,
    description: `<code>BETWEEN low AND high</code> filters rows where a value falls within an inclusive range. Works with numbers, dates, and text.

<b>Your task:</b> Find all products priced between <code>$20</code> and <code>$100</code> (inclusive).

You should get 3 products: Headphones ($79.99), Coffee Maker ($49.99), and Blender ($39.99).`,
    example: `-- Users aged 25 to 35:
SELECT * FROM users WHERE age BETWEEN 25 AND 35;

-- BETWEEN is inclusive: "age BETWEEN 25 AND 35"
-- is the same as: "age >= 25 AND age <= 35"`,
    starterCode: `-- Select products priced between $20 and $100\n`,
    test: {
      type: 'sql_rows',
      rowCount: 3,
      containsValues: [{ name: 'Headphones' }, { name: 'Coffee Maker' }]
    }
  },

  {
    id: 'sql_19',
    language: 'sql',
    title: 'Subquery',
    order: 19,
    description: `A subquery is a query nested inside another query. Use it in a <code>WHERE</code> clause to filter based on the result of another query.

<b>Your task:</b> Find all products that cost more than the average product price.

<i>Tip: The average price is about $213.56. Use a subquery: <code>WHERE price > (SELECT AVG(price) FROM products)</code></i>

You should get 2 products: Laptop and Monitor.`,
    example: `-- Find users older than the average age:
SELECT * FROM users
WHERE age > (SELECT AVG(age) FROM users);

-- The inner query runs first, then the outer one filters`,
    starterCode: `-- Find products that cost more than the average price
-- Use a subquery for the average
`,
    test: {
      type: 'sql_rows',
      rowCount: 2,
      containsValues: [{ name: 'Laptop' }, { name: 'Monitor' }]
    }
  },

  {
    id: 'sql_20',
    language: 'sql',
    title: 'CASE WHEN — Conditional Logic',
    order: 20,
    description: `<code>CASE WHEN</code> adds if/else logic inside a SQL query. It's like a switch statement that creates a new computed column.

<b>Your task:</b> Select each product's name, price, and a <code>price_range</code> column:
- <code>'cheap'</code> if price < 20
- <code>'mid'</code> if price < 100
- <code>'expensive'</code> otherwise`,
    example: `SELECT name, age,
  CASE
    WHEN age < 25 THEN 'young'
    WHEN age < 40 THEN 'adult'
    ELSE 'senior'
  END AS age_group
FROM users;`,
    starterCode: `-- Select name, price, and a "price_range" column
-- cheap = under $20, mid = under $100, expensive = $100+
`,
    test: {
      type: 'sql_rows',
      rowCount: 7,
      requiredColumns: ['price_range']
    }
  },

  {
    id: 'sql_21',
    language: 'sql',
    title: 'LEFT JOIN — Keep All Left Rows',
    order: 21,
    description: `A regular <code>JOIN</code> only returns rows that match in both tables. A <code>LEFT JOIN</code> keeps ALL rows from the left table, filling <code>NULL</code> for unmatched right-side columns.

<b>Your task:</b> Show all users and their order IDs. Users who never ordered should show <code>NULL</code> for the order.

Return columns <code>name</code> and <code>order_id</code>.

<i>Hint: Eve (user 5) has one order. Grace (user 7) has none — she should appear with NULL.</i>`,
    example: `-- All employees, even those in no department:
SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id;

-- Unmatched employees get NULL for dept_name`,
    starterCode: `-- LEFT JOIN users with orders
-- Return: name, order_id (NULL if user has no orders)
`,
    test: {
      type: 'sql_rows',
      rowCount: 9,
      requiredColumns: ['name', 'order_id']
    }
  },

  {
    id: 'sql_22',
    language: 'sql',
    title: 'COALESCE — Handle NULLs',
    order: 22,
    description: `<code>COALESCE(a, b, c)</code> returns the first non-NULL value. It's the SQL equivalent of the <code>??</code> operator in JavaScript. Perfect for replacing NULLs with defaults.

<b>Your task:</b> Using a LEFT JOIN from the previous lesson, show each user's name and their total orders. Users with no orders should show <code>0</code> instead of <code>NULL</code>.

Return columns <code>name</code> and <code>total_orders</code>.`,
    example: `-- Replace NULL with a default:
SELECT name, COALESCE(phone, 'No phone') AS contact
FROM users;

-- With aggregates, NULL counts as 0:
SELECT name, COALESCE(COUNT(order_id), 0) as total
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id;`,
    starterCode: `-- Show each user's name and total_orders
-- Use COALESCE so users with 0 orders show 0, not NULL
`,
    test: {
      type: 'sql_rows',
      rowCount: 7,
      requiredColumns: ['name', 'total_orders']
    }
  },

  {
    id: 'sql_23',
    language: 'sql',
    title: 'Mini Project: Sales Dashboard',
    order: 23,
    description: `Combine multiple SQL skills into a real analytics query.

<b>Your task:</b> Build a sales summary by product category showing:
- <code>category</code>
- <code>total_revenue</code> — sum of <code>(price × quantity)</code> across all orders, rounded to 2 decimals
- <code>order_count</code> — number of orders in that category

Order by total_revenue descending (highest revenue first).

<i>You'll need to JOIN products and orders, GROUP BY category, and use SUM with ROUND.</i>`,
    example: `-- JOINing and aggregating together:
SELECT p.category,
  ROUND(SUM(p.price * o.quantity), 2) as revenue,
  COUNT(o.id) as orders
FROM products p
JOIN orders o ON p.id = o.product_id
GROUP BY p.category
ORDER BY revenue DESC;`,
    starterCode: `-- Sales report: category, total_revenue, order_count
-- Order by total_revenue descending
`,
    test: {
      type: 'sql_rows',
      rowCount: 3,
      requiredColumns: ['category', 'total_revenue', 'order_count']
    }
  }
];
