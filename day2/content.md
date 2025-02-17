# React Bootcamp - Session 2

## Table of Contents

## Table of Contents

- Node.js and npm Recap
- [Frameworks and Libraries](#frameworks-and-libraries)
  - [What Are Frameworks?](#what-are-frameworks)
  - [Why Use Frameworks?](#why-use-frameworks)
  - [Backend vs Frontend Frameworks](#backend-vs-frontend-frameworks)
  - [Popular Frameworks](#popular-frameworks)
- [React](#react)
  - [What is React?](#what-is-react)
  - [Why Use React?](#why-use-react)
  - [React vs Angular vs Vue](#react-vs-angular-vs-vue)
- [Setting Up React](#setting-up-react)
  - [Create React App](#create-react-app)
  - [Folder Structure](#folder-structure)
  - [JSX](#jsx)
  - [Babel](#babel)
- [Components](#components)
  - [Dividing UI Into Components](#dividing-ui-into-components)
  - [Virtual DOM](#virtual-dom)
  - [Create A Component](#create-a-component)
  - [Functional Components vs Class Components](#functional-components-vs-class-components)
- [Assets](#assets)
- [Events](#events)
  - [Js Events vs React Events](#js-events-vs-react-events)
  - [Commonly Used Events](#commonly-used-events)
- [Props](#props)
- [States](#states)
  - [Using the `useState` Hook](#using-the-usestate-hook)
- [Miscellaneous](#miscellaneous)
  - [List Rendering](#list-rendering)
  - [Conditional Rendering](#conditional-rendering)
- [Workshop](#workshop)

---

## Frameworks and Libraries

### What Are Frameworks?

A framework is a collection of libraries and tools that help developers build applications faster and more efficiently. It provides a structure for developers to build upon and helps in organizing code.

Frameworks are opinionated, meaning they have a set of rules and conventions that developers must follow. This can be beneficial as it helps in maintaining a consistent codebase and makes it easier for new developers to understand the code.

### Why Use Frameworks?

- **Productivity**: Frameworks provide a structure and set of tools that help developers build applications faster.

- **Consistency**: Frameworks enforce a set of rules and conventions that help in maintaining a consistent codebase.

- **Scalability**: Frameworks are designed to handle large-scale applications and provide features like routing, state management, and data fetching.

- **Performance**: Frameworks are optimized for performance and provide features like code splitting, lazy loading, and server-side rendering.

### Backend vs Frontend Frameworks

- **Backend Frameworks**: Backend frameworks are used to build server-side applications. They handle requests, process data, and interact with databases.

- **Frontend Frameworks**: Frontend frameworks are used to build client-side applications. They handle user interfaces, manage state, and interact with APIs.

### Popular Frameworks

- **Backend Frameworks**: Express.js, Django, Ruby on Rails, Spring Boot

- **Frontend Frameworks**: React, Angular, Vue

## React

### What is React?

![image](https://hackmd.io/_uploads/BkYx4zlqJx.png)

React is a JavaScript library for building user interfaces. It was developed by Facebook and released in 2013, and is used in many popular websites, including Facebook, Instagram, and Netflix. React allows developers to build reusable UI components and manage the state of the application efficiently.

### Why Use React?

![image](https://hackmd.io/_uploads/rJcZ4zl5Je.png)

React is one of the most popular frontend libraries for building user interfaces, due to the following reasons:

- **Learning Curve**: React has a shallow learning curve and is easy to get started with.

- **Component-Based Architecture**: React is based on a component-based architecture, which allows developers to build reusable UI components.

- **Virtual DOM**: React uses a virtual DOM to optimize rendering performance, making it faster than traditional DOM manipulation.

- **Declarative Syntax**: React uses a declarative syntax, which makes it easier to understand and debug code.

- **Community Support**: React has a large and active community, with many open-source libraries and tools available.

### React vs Angular vs Vue

React, Angular, and Vue are three popular frontend frameworks for building user interfaces. Each framework has its own strengths and weaknesses, and is suited for different types of projects.

| Feature            | React                           | Angular                         | Vue                       |
| ------------------ | ------------------------------- | ------------------------------- | ------------------------- |
| **Type**           | Library                         | Framework                       | Framework                 |
| **Developed By**   | Meta (Facebook)                 | Google                          | Evan You                  |
| **Language**       | JavaScript/TypeScript           | TypeScript                      | JavaScript/TypeScript     |
| **Learning Curve** | Medium                          | Steep                           | Easy                      |
| **Performance**    | Fast (Virtual DOM)              | Moderate (Incremental DOM)      | Very Fast (Virtual DOM)   |
| **Size**           | Small (~42KB)                   | Large (~150KB)                  | Small (~18–33KB)          |
| **Best For**       | Scalable UIs, SPAs, Mobile Apps | Enterprise Apps, Large Projects | Simple to Medium Projects |
| **Job Market**     | Very High                       | High                            | Moderate                  |
| **Mobile Support** | React Native                    | Ionic/NativeScript              | Vue Native                |

Based on the above comparison, we have chosen React for this bootcamp due to its popularity, ease of learning, and performance.

## Setting Up React

### Create React App

The easiest way to set up a React application is by using Create React App (CRA), a boilerplate tool which is a software utility that helps developers quickly generate standardized code structures or project templates.

```sh
npx create-react-app my-app
```

Or using npm:

```sh
npm init react-app my-app
```

### Folder Structure

After setting up, your project structure will look like this:

```
my-app/
├── node_modules/
├── public/
│   ├── index.html
├── src/
│   ├── App.js
│   ├── index.js
├── package.json
```

- `node_modules/` contains javascript libraries that react requires. Any new library we install later will be saved in this folder.
- `public/` contains static assets like images and `index.html`.
- `src/` is where you write your React components.
  - `App.js` contains the root component of your application and where your UI and main logic start.
  - `index.js` this is the main entry file for your React app
- `package.json` contains dependencies and scripts.

**Running the App**
Navigate to your project folder and start the development server:

```sh
cd my-app
npm start
```

This will start the React app at `http://localhost:3000/`.
![react app running](https://hackmd.io/_uploads/HynX-Jg5Jx.jpg)

### JSX

JSX (JavaScript XML) is a syntax extension to JavaScript. It allows writing HTML-like code in JavaScript "javascript in disguise" and forms the basis of React Development. Using JSX is not compulsory but it is highly recommended for programming in React as it makes the development process easier as the code becomes easy to write and read.

```jsx
const element = <h1>Hello, React!</h1>;
```

JSX must be compiled to regular JavaScript using Babel.

### Babel

Babel is a JavaScript compiler that converts modern JavaScript (including JSX) into a version that browsers can understand.

**Example of JSX Compilation**

JSX:

```jsx
const element = <h1>Hello, React!</h1>;
```

Compiles to:

```js
const element = React.createElement("h1", null, "Hello, React!");
```

Babel takes JSX and converts it into JavaScript using functions like `React.createElement`. This transformation allows browsers to render JSX without any issues. When using Create React App, Babel is already configured automatically.

When you run `npm start`, Babel will compile your JSX code on the fly and serve it to the browser. When you run `npm run build`, Babel will compile your JSX code and create a production build of your React app. It will optimize the code and bundle it into a single file for deployment, using a tool called Webpack. More on this in the last session, but for now, try viewing the page source for any website made using React, and you'll see the compiled JavaScript code.

## Components

### Dividing UI Into Components

![image](https://hackmd.io/_uploads/HJ3-YzgqJe.png)

If we look at a popular website like Airbnb, we can see that it is made up of many different components like the header, footer, search bar, and listing cards. Each of these components can contain further smaller components like buttons, images, and text, with each containing more components and so on. Some components may even be reused across different pages, with different data.

React capitalizes on this idea of breaking down the UI into smaller, reusable components, and therefore, it is a component-based library. This makes it easier to manage and maintain the codebase, as each component is responsible for a specific part of the UI.

![image](https://hackmd.io/_uploads/HkGQtGl5ye.png)

Since components are reusable, they can be used multiple times across the application, reducing the amount of code duplication and making it easier to update the UI. Components can also be nested within each other, allowing for complex UI structures to be built using a combination of simple components.

![image](https://hackmd.io/_uploads/BkvIYMlqyx.png)

Data inside components can be customized using **props**. Components can also have their own internal **state**, which can be used to manage data that changes over time.

![image](https://hackmd.io/_uploads/ByWjYze9Jx.png)

Coding using components encourages modularity and simplicity. Best practice is creating a file for each component and keeping it in a separate folder, which will also contain other related files like CSS, images, and tests.

![image](https://hackmd.io/_uploads/SyTnFMe91g.png)

### Virtual DOM

React uses a virtual DOM to optimize rendering performance. The virtual DOM is a lightweight copy of the actual DOM, which is a tree-like structure that represents the HTML elements of a web page. When a component's state changes, React updates the virtual DOM instead of the actual DOM. It then compares the virtual DOM with the actual DOM and only updates the parts that have changed. This process is called reconciliation.

![image](https://hackmd.io/_uploads/r1bAtfg5yg.png)

By using the virtual DOM, React minimizes the number of updates to the actual DOM, which can be slow and inefficient. This makes React faster than traditional DOM manipulation and allows for a smoother user experience.

### Create A Component

Components are the building blocks of every React app. They allow us to create all the visible parts of our applications, like buttons, inputs, or even entire pages. Just like Legos, you can use components as many times as you want. Every React component is a JavaScript function that returns markup. However, since React is a JavaScript library, React components don't return HTML markup; they actually return JSX.

**App.js is a component.** In a React project created using Create React App, `App.js` is the main component that serves as the root component of the application. It typically contains other components and manages the structure of the UI.

It's good practice to keep your project well-structured. Start by creating a `components/` directory inside `src/`, then add your first component there.

**Example: Creating `Hello.js` inside `src/components/`**

```jsx
import React from "react";

function Hello() {
  return <h1>Hello, World!</h1>;
}

export default Hello;
```

Now, import and use it inside `App.js`:

```jsx
import React from "react";
import Hello from "./components/Hello";

function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

export default App;
```

This structure allows for reusable and modular code.

### Functional Components vs Class Components

In React, there are two primary ways to create components: function and class components. Each has its own syntax and use cases, although with the introduction of React Hooks, the gap between them has narrowed significantly. But the selection of appropriate component types is still very crucial for building efficient and maintainable React applications.

- **Function Components:** These are simple JavaScript functions that take props as input and return JSX elements. They are often used for presentational or stateless components.

```jsx!
function WelcomeMessage(props) {
  return <h1>Welcome, {props.name}</h1>;
}
```

Functional components are some of the more common components that will come across while working in React.

- **Class Components:** These are ES6 classes that extend from React.Component or React.PureComponent. They have a render() method where you define the structure of your component's UI using JSX. Class components are used for components that need to manage state or have lifecycle methods.

```jsx!
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Class components are good for managing state and handling more complex logic. They come with a bunch of built-in methods for managing the component’s lifecycle.

But because they’re more complex, they can be harder to read and write, especially for beginners.

## Assets

Assets such as images can be imported and used in React components using the `import` statement. Images can be imported as modules and then used as the `src` attribute of an `img` element. Here is an example of importing and using an image in a React component.

```javascript
import React from "react";
import logo from "./logo.png";

function App() {
  return <img src={logo} alt="Logo" />;
}

export default App;
```

Another way to use images is placing them in the `public` directory and using the `process.env.PUBLIC_URL` environment variable to reference them. Here is an example of using an image from the `public` directory in a React component.

```javascript
import React from "react";

function App() {
  return <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo" />;
}

export default App;
```

The first method is recommended for images that are used frequently in the application, while the second method is recommended for images that are used infrequently or are large in size.

## Events

**React Synthetic Events & Event Pooling**

In React, event objects are instances of **SyntheticEvent**, which is a wrapper around the native DOM event. React uses synthetic events to ensure that event handling works consistently across different browsers by normalizing the event properties. One key difference between synthetic events and native events is that **React pools event objects for performance reasons**.

**What Does "Pooled Events" Mean?**
React reuses (or **pools**) event objects instead of creating a new event object every time an event is fired which **reduces memory usage and improves performance**. This means that **after the event callback finishes executing, React clears the event's properties** to make it available for reuse in future events. As a result, if you try to access the event properties asynchronously (e.g., inside a `setTimeout`), the event object may have been reset.

### Example:

```jsx
function handleClick(event) {
  console.log(event.type); // "click"

  setTimeout(() => {
    console.log(event.type); // This will log `null` or an error!
  }, 1000);
}

<button onClick={handleClick}>Click Me</button>;
```

**What happens here?**

- The event (`event.type`) is correctly logged inside the event handler.
- But **after React's event system finishes processing** the event, React clears its properties.
- So, when the `setTimeout` runs **after the event callback has finished**, the event object no longer contains the expected data.

**How React’s SyntheticEvent Works**
`SyntheticEvent` is a wrapper that contains all the standard properties of a native event. The `SyntheticEvent` object normalizes properties like `event.target`, `event.key`, and `event.which` to work consistently across different browsers.

For example:

```jsx
function MyComponent() {
  const handleClick = (event) => {
    console.log(event); // Logs a SyntheticEvent object
    console.log(event.target); // Logs the element clicked
    console.log(event.type); // Logs "click"
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

Output:

```
SyntheticBaseEvent {type: "click", target: button, ...}
<button>Click Me</button>
"click"
```

**How to Fix the Event Pooling Issue?**
If you need to use the event object asynchronously (e.g., inside `setTimeout`, `fetch`, or `useEffect`), you should **store the event properties in a variable** or **call `event.persist()`** to prevent React from clearing it.

**Solution 1: Store Event Properties in a Variable**

```jsx
function handleClick(event) {
  const eventType = event.type; // Store the event property

  setTimeout(() => {
    console.log(eventType); // Now this works correctly!
  }, 1000);

  return <button onClick={handleClick}>Click me</button>;
}
```

**Solution 2: Use `event.persist()`**
Calling `event.persist()` prevents React from nullifying the event:

```jsx
function handleClick(event) {
  event.persist(); // Prevent React from clearing the event

  setTimeout(() => {
    console.log(event.type); // Now this works correctly!
  }, 1000);

  return <button onClick={handleClick}>Click me</button>;
}
```

### Js Events vs React Events

1. **Event Binding in JSX**

- Instead of addEventListener, you directly attach event handlers to JSX elements:

```jsx
<button onClick={handleClick}>Click me</button>
```

- In vanilla JavaScript:

```js
document.querySelector("button").addEventListener("click", handleClick);
```

2. **Event Naming Conventions**

- React uses camelCase for event names: onClick instead of onclick, onChange instead of onchange.

```jsx
<input onChange={handleChange} />
```

3. **Arrow Functions And Passing Arguments to Event Handlers**

- In React, you can pass arguments to event handlers using arrow functions:

```jsx
<button onClick={() => handleClick("Hello")}>Click me</button>
```

- In vanilla JavaScript, you can use `bind` or `data-*` attributes to pass arguments:

```js
<button onclick="handleClick('Hello')">Click me</button>
```

4. **Preventing Default Behavior**

- In React, you can call `event.preventDefault()` to prevent the default behavior of an event:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  // Handle form submission
}
```

- In vanilla JavaScript, you can call `event.preventDefault()` on the event object:

```js
function handleSubmit(event) {
  event.preventDefault();
  // Handle form submission
}
```

### Commonly Used Events

React allows you to handle various user events like clicks, mouse movements, key presses, and form submissions. You can use event handlers to capture these events and update the component's state accordingly.

**1. Mouse Events**

- `onClick`: Triggered when the user clicks on an element.

**Example:**

```jsx
import React from "react";

function ClickButton() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click me</button>;
}
```

**2. Form Events**

- `onChange`: Triggered when the value of a form elementlike `<input>` changes.
  **Example:**

```jsx!
import React from 'react';

const MyForm = () => {
  const handleChange = (event) => {
    console.log('Input value changed:', event.target.value);
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" onChange={handleChange} />
      </label>
    </form>
  );
};

export default MyForm;
```

Here, when you type in the input field, the `handleChange` function will log the updated value to the console.

`onSubmit`: Triggered when a form is submitted.

```jsx!
import React from 'react';

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission (page reload)

    const username = event.target.username.value;
    const password = event.target.password.value;

    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
```

### Props

In React, **props** (short for "properties") are used to pass data from one component to another. Props allow components to be dynamic and configurable. They can be passed from a parent component to a child component and are accessible as an object within the child component.

## Example:

### Parent Component (`App.jsx`):

```javascript
import React from "react";
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting name="John" />
    </div>
  );
}

export default App;
```

Child Component (Greeting.jsx):

```javascript
import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

In this example, the name prop is passed from the App component to the Greeting component, where it's rendered dynamically.

### States

State is a fundamental concept in React. It allows components to manage and respond to dynamic data. When state changes, React automatically re-renders the component to reflect the updated state.

**Using the `useState` Hook**

In React functional components, you manage state using the `useState` hook. It returns a pair: the current state value and a function to update that state.

**Example: Basic `useState` Hook Usage**

```javascript
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
```

In this example, the useState hook initializes the count state to 0. When the button is clicked, the increment function updates the state, causing the component to re-render.

**Example:`useState` with different variable type**

```jsx
import React, { useState } from "react";

function Greeting() {
  // Declare a state variable 'name' with an initial value of an empty string
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Enter Your Name:</h2>
      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name && <h3>Hi {name}</h3>}
    </div>
  );
}

export default Greeting;
```

## Miscellaneous

### List Rendering

React components can render lists of items using the `map()` method. The `map()` method is used to iterate over an array and render a component for each item in the array. The `map()` method takes a function as an argument that defines how each item in the array should be rendered. Here is an example of rendering a list of items in a `List` component.

```jsx
import React from "react";

function List() {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
```

###### Preview:

<div style="border: 1px solid black; padding: 10px;">
  <ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
  </ul>
</div>

In this example, the `List` component contains an array of items and uses the `map()` method to render a list item for each item in the array. The `key` prop is used to provide a unique identifier for each list item. The `key` prop is used by React to efficiently update the list when items are added, removed, or reordered.

### Conditional Rendering

React components can conditionally render content based on a condition using the ternary operator or logical `&&` operator. This allows components to display different content based on the state of the application. Here is an example of conditional rendering in a `Greeting` component.

```jsx
import React from "react";

function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;
}

export default Greeting;
```

In this example, the `Greeting` component takes a prop `isLoggedIn` and conditionally renders a welcome message if the user is logged in or a login message if the user is not logged in.

```jsx
import React from "react";

function App() {
  const isLoggedIn = true;

  return <Greeting isLoggedIn={isLoggedIn} />;
}

export default App;
```

###### Preview:

<div style="border: 1px solid black; padding: 10px;">
  <h1>Welcome back!</h1>
</div>

## Workshop

You will build an expense tracker application using React. The application will allow users to add, edit, and delete expenses, and display a summary of the total expenses. The application will consist of the following components:

- `App`: The root component of the application.
- `ExpenseList`: A list of expenses.
- `ExpenseItem`: An individual expense item.
- `ExpenseForm`: A form to add or edit expenses.
- `ExpenseSummary`: A summary of the total expenses.
