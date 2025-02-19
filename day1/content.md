# Session 1: HTML, CSS, Javascript Refresh
The target of this session is to gain a strong foundation to be able to grasp the concepts of the next sessions easily.
## HTML
HTML (HyperText Markup Language) is the foundation of all web pages. It structures the content and provides meaning to the elements displayed in a browser. Think of HTML as the skeleton of a website.
### What is a Tag and an Attribute?
#### Tags
Tags are the building blocks of HTML. They define elements and tell the browser how to display content.

`<p>This is a paragraph.</p>`

Here, `<p>` is the opening tag, and `</p>` is the closing tag.
#### Attributes
Attributes provide additional information about an element. They are added inside the opening tag.

`<a href="https://www.example.com">Visit Example</a>`

**Note: You'll Understand more when we start explaining each tag.**


---

### Text Formatting Tags
#### Headings
Used to define headings from most important `<h1>` to least important `<h6>`:
```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Smaller Subheading</h3>
<h4>Much Smaller Subheading</h4>
<h5>Much Much Smaller Subheading</h5>
<h6>Much Much Mcuh Smaller Subheading</h6>
```
![Headings](https://hackmd.io/_uploads/B1QC738Kkl.png)

### Paragraphs and Line Breaks
- `<p>`: Defines a paragraph.
- `<br>`: Inserts a line break.

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
<p>This text contains a<br>line break.</p>
```
![Screenshot 2025-02-10 010410](https://hackmd.io/_uploads/ryzY43LYyg.png)

### Bold and Italic
- `<strong>`: Makes text bold
- `<em>`: Emphasizes text.

```html
<p>This is <strong>important</strong> text.</p>
<p>This is <em>emphasized</em> text.</p>
```
![Screenshot 2025-02-10 010723](https://hackmd.io/_uploads/HJgN8H2UKJl.png)

### Lists
#### Unordered List

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

![Screenshot 2025-02-10 011053](https://hackmd.io/_uploads/rJWMU2Utyg.png)

#### Ordered List

```html
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
```

![Screenshot 2025-02-10 011201](https://hackmd.io/_uploads/B1HIInUtyx.png)


---

### Links
The `<a>` tag is used to create hyperlinks that navigate to other web pages, sections, or even files.

```html
<a href="https://www.example.com">Visit Example</a>
```
This creates a clickable link that directs users to https://www.example.com.

#### Important Attributes:
- href (Hyperlink Reference): Specifies the link destination.
- target: Defines where to open the link (_self for the same tab, _blank for a new tab).
- title: Provides additional info when hovering over the link.

```html
<a href="https://www.google.com" target="_blank" title="Go to Google">Google</a>
```

#### Linking to an Email
```html
<a href="mailto:someone@example.com">Send Email</a>
```

#### Linking to an Phone Number
```html
<a href="tel:+0123456789">lel mo3gabat</a>
```
---

### Images
The `<img>` tag is used to display images on a webpage.
```html
<img src="image.jpg" alt="Description of image">
```
#### Important Attributes:
- `src` (Source): Specifies the image file path.
- `alt` (Alternative Text): Displays text if the image fails to load and helps with accessibility.
- `width` & `height`: Controls the image size.
- `loading="lazy"`: Improves page performance by loading images only when needed.

```html
<img src="images.png" alt="Zamalek Logo" width="50px" loading="lazy">
```
![Screenshot 2025-02-11 000645](https://hackmd.io/_uploads/BkCKug_Kyx.png)
---

### Forms & Inputs
Forms allow users to input data and send it to a server. A form is like a conversation between the user and the website!
```html
<form action="/submit">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name">
    
    <button type="submit">Submit</button>
</form>
```
![Screenshot 2025-02-11 001627](https://hackmd.io/_uploads/SyL1iedF1e.png)

- `<form>`: Wraps all input fields and buttons.
- `action`: Defines where to send the form data.
- `<label>`: Describes an input field (helps with accessibility).
- `<input>`: Accepts user input.
- `<button>`: Submits the form.

#### Input Types
##### Password
```html
<input type="password" placeholder="Enter password">
```
##### Email Input
```html
<input type="email" placeholder="Enter email">
```
##### Number Input
```html
<input type="number" min="1" max="100" placeholder="Enter a number">
```
##### Checkbox
```html
<label>
    <input type="checkbox" name="subscribe" checked> Subscribe to newsletter
</label>
```
##### Radio Button
```html
<label>
    <input type="radio" name="gender" value="male"> Male
</label>
<label>
    <input type="radio" name="gender" value="female"> Female
</label>
```
##### Dropdown
```html
<select name="country">
    <option value="usa">USA</option>
    <option value="uk">UK</option>
    <option value="canada">Canada</option>
</select>
```

---

### Tables
Tables help organize data in **rows** and **columns**. They are commonly used to display structured information.


```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Country</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>25</td>
        <td>USA</td>
    </tr>
    <tr>
        <td>Bob</td>
        <td>30</td>
        <td>UK</td>
    </tr>
</table>
```
- `<table>`: Defines the table.
- `<tr>` (Table Row): Represents a row in the table.
- `<th>` (Table Header): Defines column headers (bold by default).
- `<td>` (Table Data): Holds actual data in a table cell.
- `border="1"`: Adds a visible border (for demonstration).

![Screenshot 2025-02-15 125513](https://hackmd.io/_uploads/r1Bsze0KJg.png)
---
### Semantic HTML Tags
Semantic tags **give meaning** to web page elements. They improve: 
- Readability 
- SEO (Search Engine Optimization) 
- Accessibility

#### Common Semantic Tags
##### `<header>` Page/Header Section 
Defines the **top section** of a web page, often containing a logo, title, or navigation.

```html
<header>
    <h1>Welcome to My Website</h1>
    <nav>
        <a href="home.html">Home</a>
        <a href="about.html">About</a>
    </nav>
</header>
```
##### `<nav>`  Navigation
```html
<nav>
    <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="services.html">Services</a></li>
    </ul>
</nav>
```
##### `<section>` Sections of Content
```html
<section>
    <h2>Latest News</h2>
    <p>Exciting updates coming soon!</p>
</section>
```
## Cascaded Style Sheets (CSS)
CSS (**Cascading Style Sheets**) is used to **style** HTML elements and make web pages visually appealing.
### How to Add CSS? 
There are **three ways** to add CSS to an HTML page:
#### 1️⃣ Inline CSS (Applied directly inside an HTML tag)

```html
<p style="color: blue; font-size: 20px;">This is blue text.</p>
```
#### 2️⃣ Internal CSS (Written inside the `<style>` tag in the `<head>` section)
```html
<head>
    <style>
        p {
            color: red;
            font-size: 18px;
        }
    </style>
</head>
```
#### 3️⃣ External CSS (Best practice! Written in a separate .css file)
```css
/* styles.css */
p {
    color: green;
    font-size: 16px;
}
```
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```
----
### Selectors
CSS selectors allow you to target specific HTML elements and apply styles to them. There are different types of selectors to make styling more efficient.

#### 1️⃣ Universal Selector (`*`)
The universal selector applies styles to **all elements** on the page.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
#### 2️⃣ Element Selector
Targets all elements of a specific type.
```css
p {
    color: blue;
    font-size: 16px;
}
```
**Applies to: `<p>` elements.**

#### 3️⃣ Class Selector (.)
Targets elements with a specific class. Useful for reusing styles.
```css
.button {
    background-color: green;
    color: white;
    padding: 10px 20px;
}
```

```html
<button class="button">Click Me</button>
```

#### 4️⃣ ID Selector (#)
Targets a single, unique element.
```css
#header {
    background-color: black;
    color: white;
}
```
✅ Usage in HTML:
```html
<h1 id="header">Welcome!</h1>
```
**IDs should be unique on a page.**

#### 5️⃣ Grouping Selector (,)
Applies the same style to multiple elements.
```css
h1, h2, h3 {
    font-family: Arial, sans-serif;
    color: darkblue;
}
```
#### 6️⃣ Descendant Selector ( )
Targets elements inside another element.
```css
div p {
    color: red;
}
```
```html
<div>
    <p>This paragraph will be red.</p>
</div>
```
#### 7️⃣ Child Selector (>)
Targets direct children of an element.
```css
div > p {
    font-weight: bold;
}
```
```html
<div>
    <p>This is bold.</p>
    <span>
        <p>This is NOT bold (not a direct child).</p>
    </span>
</div>
```

#### Pseudo-Classes & Pseudo-Elements
Selectors that apply styles based on state or specific parts of an element.

:hover - When hovering over an element
```css
button:hover {
    background-color: yellow;
}
```

::first-letter - Styles the first letter of an element
```css
p::first-letter {
    font-size: 2rem;
    color: red;
}
```
---

### CSS Units
- **What are CSS Units?**
  - CSS units are used to specify sizes, distances, and other measurements in CSS properties.
  - They help in defining the layout, spacing, and dimensions of elements on a webpage.

- **Why are CSS Units Important?**
  - They ensure consistency across different devices and screen sizes.
  - They help in creating responsive designs.

---

### Types of CSS Units

### 1. Absolute Units
- **Definition**: Absolute units are fixed and do not change based on the screen size or other factors.
- **Common Absolute Units**:
  - `px` (Pixels)
    - Example: `font-size: 16px;`
  - `pt` (Points)
    - Example: `font-size: 12pt;`
  - `in` (Inches)
    - Example: `width: 2in;`
  - `cm` (Centimeters)
    - Example: `height: 5cm;`
  - `mm` (Millimeters)
    - Example: `margin: 10mm;`
  - `pc` (Picas)
    - Example: `line-height: 1.6pc;`

- **Use Cases**:
  - Print stylesheets.
  - Fixed-size elements that should not scale.

### 2. Relative Units
- **Definition**: Relative units are relative to another length or property, making them more flexible for responsive design.
- **Common Relative Units**:
  - `em`
    - Relative to the font-size of the element.
    - Example: `font-size: 2em;` (2 times the current font size)
  - `rem`
    - Relative to the font-size of the root element (`<html>`).
    - Example: `font-size: 1.5rem;`
  - `%` (Percentage)
    - Relative to the parent element.
    - Example: `width: 50%;`
  - `vw` (Viewport Width)
    - Relative to 1% of the viewport's width.
    - Example: `width: 50vw;`
  - `vh` (Viewport Height)
    - Relative to 1% of the viewport's height.
    - Example: `height: 100vh;`
  - `vmin` (Viewport Minimum)
    - Relative to 1% of the viewport's smaller dimension.
    - Example: `font-size: 5vmin;`
  - `vmax` (Viewport Maximum)
    - Relative to 1% of the viewport's larger dimension.
    - Example: `font-size: 5vmax;`

- **Use Cases**:
  - Responsive layouts.
  - Scalable typography.
  - Flexible spacing and sizing.

### 3. Other Units
- **`ch` (Character)**
  - Relative to the width of the "0" (zero) character.
  - Example: `width: 20ch;`
- **`ex` (x-height)**
  - Relative to the height of the lowercase "x" in the current font.
  - Example: `line-height: 2ex;`

---

## Choosing the Right Unit
- **When to Use Absolute Units**:
  - For fixed-size elements like borders or icons.
  - When precise control over size is required.

- **When to Use Relative Units**:
  - For responsive designs.
  - When you want elements to scale based on screen size or user preferences.

---
### Example:
```css
html {
  font-size: 16px;
}

h1 {
  font-size: 2rem; /* 32px */
}

p {
  font-size: 1rem; /* 16px */
  line-height: 1.5em; /* 24px */
}
```

### CSS Box Model
- **What is the CSS Box Model?**
  - The CSS Box Model is a rectangular layout paradigm for HTML elements.
  - It consists of margins, borders, padding, and the actual content.

- **Why is the Box Model Important?**
  - It helps in understanding how elements are sized and spaced.
  - It is crucial for creating consistent layouts and designs.

---

#### Components of the Box Model

##### 1. Content
- **Definition**: The actual content of the box, where text and images appear.
- **Properties**:
  - `width`
  - `height`
- **Example**:
```css
  .box {
    width: 200px;
    height: 100px;
  }
```

##### 2. Padding

Definition: The space between the content and the border.

Properties:

- padding-top
- padding-right
- padding-bottom
- padding-left
- Shorthand: padding

**Example:**
```css
    .box {
      padding: 20px; /* Applies to all sides */
      padding: 10px 20px; /* Top/Bottom: 10px, Left/Right: 20px */
      padding: 10px 20px 30px 40px; /* Top: 10px, Right: 20px, Bottom: 30px, Left: 40px */
    }
```

##### 3. Border
Definition: The border surrounding the padding (if any) and content.
**Properties:**
- border-width
- border-style
- border-color
- Shorthand: border
```css
    .box {
      border: 2px solid #000; /* Width: 2px, Style: solid, Color: black */
    }
```

##### 4. Margin
Definition: The space outside the border, separating the element from other elements.

Properties:
- margin-top
- margin-right
- margin-bottom
- margin-left
- Shorthand: margin
```css
    .box {
      margin: 10px; /* Applies to all sides */
      margin: 10px 20px; /* Top/Bottom: 10px, Left/Right: 20px */
      margin: 10px 20px 30px 40px; /* Top: 10px, Right: 20px, Bottom: 30px, Left: 40px */
    }
```

#### Box-Sizing Property

Default Behavior (content-box):
The width and height properties apply only to the content.
Padding and border are added to the total width and height.
```css
        .box {
          width: 200px;
          padding: 20px;
          border: 5px solid #000;
          /* Total width: 200px + 40px (padding) + 10px (border) = 250px */
        }
```

#### border-box Behavior:
The width and height properties include content, padding, and border.
```css
        .box {
          box-sizing: border-box;
          width: 200px;
          padding: 20px;
          border: 5px solid #000;
          /* Total width: 200px (includes padding and border) */
        }
```



## JavaScript (JS)


### Why JavaScript?  

JavaScript (JS) is a **high-level, interpreted, event-driven** programming language primarily used for web development. It enables developers to create **interactive and dynamic** web applications.  

#### Key Reasons to Use JavaScript:  
- **🌐 Client-Side Execution** – Runs directly in the browser, reducing server load.  
- **🎨 Interactivity** – Enables dynamic UI elements, animations, and real-time updates.  
- **🔄 Versatility** – Used in both **frontend** (React, Vue, Angular) and **backend** (Node.js). 
- **⚡ Wide Ecosystem** – Extensive libraries (Lodash, Moment.js), frameworks, and community support.  

---

### JavaScript Variables  

#### **Understanding Variables**  

A **variable** in JavaScript is a container for storing data values. It allows you to store and manipulate data dynamically. 
JavaScript variables are **dynamically typed**, meaning they can hold different types of values. 
 

#### **Variable Declaration Methods**  

JavaScript provides three ways to declare variables:  

| Keyword  | Scope         | Can be Reassigned? | Hoisting  | Use Case  |
|----------|--------------|--------------------|-----------|-----------|
| `var`    | Function-wide | ✅ Yes            | ✅ Yes (with `undefined`)  | Old, avoid using it |
| `let`    | Block-scoped | ✅ Yes            | ❌ No     | Preferred for mutable values |
| `const`  | Block-scoped | ❌ No (Immutable) | ❌ No     | Best for constants |

---

#### **`var` (Function Scope - Avoid Using It)**
- **Not Block-Scoped** → Can be accessed outside a block.
- **Hoisted** → Declared at the top but initialized as `undefined`.  

```js
console.log(name); // Undefined (Hoisting)
var name = "Alice";
console.log(name); // Alice

if (true) {
    var age = 30;
}
console.log(age); // 30 (Accessible outside the block)
```

**Problem with `var`**: It can be **accidentally overridden** and causes unexpected bugs.

---

#### **`let` (Block Scope - Modern Choice)**
- **Block-Scoped** → Exists only inside `{}`.
- **Not Hoisted** → Cannot be used before declaration.

```js
let x = 10;
console.log(x); // 10
if (true) {
    let username = "John";
    console.log(username); //John
}
console.log(username); //Error (Not accessible outside)
console.log(x); // 10
```

**Use `let`** when the value **needs to change**.

---

#### **`const` (Immutable Variables)**
- **Block-Scoped**.
- **Cannot be reassigned**.

```js
const PI = 3.1416;
PI = 3.14; //Error (Cannot reassign)
```

**Use `const`** when the value **should not change**.

---

#### **Key Differences Between `var`, `let`, and `const`**

```js
// var - Function scoped
function testVar() {
    var a = 10;
    if (true) {
        var a = 20; // Overwrites the variable
    }
    console.log(a); // 20
}

// let - Block scoped
function testLet() {
    let b = 10;
    if (true) {
        let b = 20; // Different variable inside block
    }
    console.log(b); // 10
}

// const - Immutable
const c = 30;
c = 40; //  TypeError: Assignment to constant variable
```

---

### Input & Output (I/O)  

#### **Taking User Input (Browser)**  
```js
let name = prompt("Enter your name:");
console.log("Hello, " + name);
```

#### **Taking User Input (Node.js)**  
```js
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter your name: ", name => {
    console.log("Hello, " + name);
    readline.close();
});
```

#### **Displaying Output**  
- **Console Output:**  
  ```js
  console.log("This is a console message.");
  ```
- **Alert Message:**  
  ```js
  alert("This is an alert box.");
  ```

---

### Lists (Arrays)  

Arrays in JavaScript store multiple values in a single variable.  

#### **Creating an Array:**  
```js
let fruits = ["Apple", "Banana", "Mango"]; // Array of strings
```

#### **Accessing Elements:**  
```js
console.log(fruits[0]); // Apple
```

#### **Modifying an Array:**  
```js
fruits.push("Orange"); // Add to end
fruits.pop(); // Remove last item
fruits.unshift("Grapes"); // Add to start
fruits.shift(); // Remove first item
fruits.splice(1, 1, "Kiwi"); // Add/Remove at index
fruits[0] = "Pineapple"; // Update an element
fruits.length; // Length of the array
fruits.sort(); // Sort the array
fruits.reverse(); // Reverse the array
fruits.indexOf("Banana"); // Find index of an item
fruits.includes("Mango"); // Check item existence
fruits.join(", "); // Convert to string
fruits.slice(1, 3); // Extract elements
fruits.concat(["Papaya", "Guava"]); // Merge arrays
```

#### **Arrays of Different Types:**  
```js
let mixedArray = ["Apple", 5, true, null];
```


---

### Conditions and Loops  

#### **Conditional Statements**  
```js
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```

#### **Switch Case Example**  
```js
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("Another day.");
}
```

#### **Looping Statements**  
```js
// For Loop 
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// Do-While Loop
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);

// For-each Loop
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
}

```

---

### Functions

#### **Defining a Function**  
```js
function greet(name) {
    console.log("Hello, " + name);
}

greet("Alice"); // Hello, Alice
```

#### **Function with Return Value**  
```js
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log(sum); // 8
```

#### **Arrow Functions**  
```js
const multiply = (a, b) => a * b;
console.log(multiply(5, 3)); // 15
```

#### **Function Expressions**  
```js
const subtract = function(a, b) {
    return a - b;
};

console.log(subtract(5, 3)); // 2
```


---

### Objects  

JavaScript uses objects to store **key-value pairs**.  

#### **Creating an Object:**  
```js
let person = {
    name: "Alice",
    age: 25,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
```

#### **Object Properties:**  
```js
console.log(person.name); // Alice
person.greet(); // Hello, Alice

// Bracket Notation
console.log(person["age"]); // 25

// Adding New Property
person.city = "New York";

// Deleting a Property
delete person.age;
```

### Functional Programming  

JavaScript supports **functional programming paradigms** using first-class functions.  

#### **Arrow Functions:**  
```js
const square = num => num * num;
console.log(square(5)); // 25
```

#### **Higher-Order Functions:**  
```js
const numbers = [1, 2, 3, 4];

// Using map()
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16]

// Using filter()
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

#### **Closures:**  
```js
function outerFunction() {
    let outerVariable = "I am outside!";

    function innerFunction() {
        let innerVariable = "I am inside!";
        console.log(outerVariable);
    }

    return innerFunction;
}

let myFunction = outerFunction();
myFunction(); // I am outside!
```

#### **Currying:**  
```js
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

let multiplyByTwo = multiply(2);

console.log(multiplyByTwo(5)); // 10

```

#### **Spread Operator:**  

The **spread operator** (`...`) allows an iterable to expand in places where multiple arguments or elements are expected.  
```js
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]
```

```js
let person = { name: "Alice", age: 25 };
let newPerson = { ...person, city: "New York" };
console.log(newPerson); // { name: "Alice", age: 25, city: "New York" }
```

```js
function sum(a, b, c) {
    return a + b + c;
}
let numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
```

#### **Advanced Array Methods:**  
```js
let numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(num => console.log(num));
numbers.forEach((num, index) => console.log(index, num));

// Map (Transform)
let squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]

// Filter (Condition-based Selection)
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Reduce (Aggregation)
// Calculate the sum of all numbers in the accumulator
// Initial value of accumulator is 0
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```



---
### DOM (Document Object Model)

The **DOM** is a programming interface for HTML (and XML) documents. It represents the page so that programs can change the document structure, style, and content. Think of the DOM as a tree where each node is an object representing a part of the document (elements, attributes, text, etc.).

#### What is the DOM?

- **Representation of a Web Page**: The DOM turns the HTML document into a tree-like structure of objects, allowing JavaScript to interact with and modify the content dynamically.
- **Interface for Manipulation**: It provides methods and properties to access, modify, add, or remove elements and attributes.

#### Accessing DOM Elements

You can select elements from the DOM using several methods:

- **By ID**:
  ```js
  const element = document.getElementById("myId");
  ```
- **By Class Name**:
  ```js
  const elements = document.getElementsByClassName("myClass");
  ```
- **By Tag Name**:
  ```js
  const paragraphs = document.getElementsByTagName("p");
  ```
- **Using querySelector / querySelectorAll**:
  ```js
  const firstItem = document.querySelector(".item");         // Selects the first element with class "item"
  const allItems = document.querySelectorAll(".item");         // Selects all elements with class "item"
  ```

#### Manipulating DOM Elements

- **Changing Text and HTML Content**:
  ```js
  const heading = document.getElementById("heading");
  heading.textContent = "New Heading Text";             // Changes only the text content
  heading.innerHTML = "<span>New Heading with HTML</span>"; // Replaces content including HTML tags
  ```
- **Modifying Attributes**:
  ```js
  const image = document.querySelector("img");
  image.setAttribute("src", "new-image.jpg");  // Changes the source of the image
  image.alt = "New description";               // Updates the alternative text
  ```
- **Styling Elements**:
  ```js
  const paragraph = document.querySelector("p");
  paragraph.style.color = "blue";
  paragraph.style.fontSize = "18px";
  ```

#### Creating, Inserting, and Removing Elements

- **Creating a New Element**:
  ```js
  const newDiv = document.createElement("div");
  newDiv.textContent = "Hello, I'm a new div!";
  ```
- **Appending an Element**:
  ```js
  document.body.appendChild(newDiv);
  ```
- **Inserting an Element Before Another Element**:
  ```js
  const referenceNode = document.getElementById("reference");
  referenceNode.parentNode.insertBefore(newDiv, referenceNode);
  ```
- **Removing an Element**:
  ```js
  const elementToRemove = document.getElementById("remove-me");
  elementToRemove.parentNode.removeChild(elementToRemove);
  ```

#### Traversing the DOM

- **Navigating Up (Parent Node)**:
  ```js
  const child = document.getElementById("child");
  const parent = child.parentNode;
  ```
- **Navigating Down (Child Nodes)**:
  ```js
  const container = document.getElementById("container");
  const firstChild = container.firstElementChild;
  const allChildren = container.children;
  ```
- **Navigating Siblings**:
  ```js
  const current = document.getElementById("current");
  const nextSibling = current.nextElementSibling;
  const previousSibling = current.previousElementSibling;
  ```

#### Handling Events

Events allow you to run code in response to user actions or other occurrences.

- **Adding an Event Listener**:
  ```js
  const button = document.getElementById("myButton");
  button.addEventListener("click", function() {
      alert("Button clicked!");
  });
  ```
- **Using the Event Object**:
  ```js
  button.addEventListener("click", function(event) {
      console.log("Clicked at coordinates:", event.clientX, event.clientY);
  });
  ```

#### Working with Class Lists

The `classList` property provides a convenient way to access and modify an element’s list of classes.

- **Adding, Removing, and Toggling Classes**:
  ```js
  const element = document.querySelector(".myElement");
  element.classList.add("active");
  element.classList.remove("inactive");
  element.classList.toggle("visible"); // Adds "visible" if not present, removes if it is
  ```
- **Checking for a Class**:
  ```js
  if (element.classList.contains("active")) {
      console.log("The element is active!");
  }
  ```
---
### Storages
#### **Local Storage (Persistent)**  
Storage that persists even after the browser is closed.
It stores the data in the form of key-value pairs, where both the key and value are strings.

```js
localStorage.setItem("username", "John");
console.log(localStorage.getItem("username")); // John
```

#### **Session Storage (Temporary)**  
Storage that is cleared when the browser is closed, or the tab is closed.
It stores the data in the form of key-value pairs, where both the key and value are strings.
```js
sessionStorage.setItem("sessionData", "This is a session");
console.log(sessionStorage.getItem("sessionData"));
```

#### **Cookies (Small Data with Expiry)**  
Cookies are small pieces of data stored in the browser. They can be set with an expiry date.
```js
document.cookie = "user=John; expires=Fri, 31 Dec 2024 12:00:00 UTC";
```

---


### Asynchronous JavaScript  

JavaScript is **single-threaded**, meaning it executes one task at a time.  
However, it supports **asynchronous programming** using **callbacks, Promises, and async/await**. 

``Note``: **Asynchronous** means that things can happen independently of the main program flow, .i.e., the code runs in parallel with the rest of the code.


#### **Callbacks (Old Method)**
A **callback** is a function passed as an argument to another function.

```js
function fetchData(callback) {
    // Simulate a time-consuming operation
    setTimeout(() => {
        callback("Data Loaded!");
    }, 2000);
}

fetchData((result) => {
    console.log(result); // After 2s → "Data Loaded!"
});
```

**Callback Hell Problem**: Callbacks inside callbacks cause unreadable **nested code**.
It becomes difficult to manage multiple asynchronous operations.

```js
fetchData((data) => {
    process(data, (processedData) => {
        save(processedData, (savedData) => {
            console.log(savedData);
        });
    });
});
```

---

#### **Promises (Better Solution)**
A **Promise** represents an operation that **may complete in the future**.

##### **Creating a Promise**
```js
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        if (success) resolve("Data Fetched!");
        else reject("Error Fetching Data!");
    }, 2000);
});
```

##### **Using `.then()` and `.catch()`**
```js
myPromise
    .then(response => console.log(response)) //Data Fetched!
    .catch(error => console.log(error));     //Error
```

##### **Chaining Multiple Promises**
```js
fetchUserData()
    .then(data => processUserData(data))
    .then(result => saveData(result))
    .catch(error => console.error(error));
```

**Advantages of Promises**  
- **Avoids callback hell**  
- **Easier error handling with `.catch()`**  
- **Supports chaining (`.then()`)**  

---

#### **Async/Await (Modern Approach)**  

Async/Await simplifies working with **Promises**.  
It allows writing **asynchronous code** that looks like **synchronous code**.
Most built-in functions return Promises, so `await` can be used with them.

##### **Declaring an `async` Function**
- `async` makes a function **return a Promise**.
- `await` pauses execution until the Promise resolves.

```js
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data); //Displays JSON response
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();
```


**Example Code**  
You can find the example code in files [index.html](workshop/index.html) and [script.js](workshop/script.js) in this repository.
