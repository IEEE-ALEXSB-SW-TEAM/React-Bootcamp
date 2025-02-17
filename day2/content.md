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
  - [First Project](#first-project)
  - [Folder Structure](#folder-structure)
  - [JSX](#jsx)
  - [Babel](#babel)
- [Components](#components)
  - [Dividing UI Into Components](#dividing-ui-into-components)
  - [Virtual DOM](#virtual-dom)
  - [Create A Component](#create-a-component)
  - [Functional Components vs Class Components](#functional-components-vs-class-components)
  - [Events](#events)
  - [Props](#props)
  - [States](#states)
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

Example: Creating `Hello.js` inside `src/components/`

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

Functional components are some of the more common components that will come across while working in React. These are simply JavaScript functions. We can create a functional component to React by writing a JavaScript function.

```jsx
const Car = () => {
  return <h2>Hi, I am also a Car!</h2>;
};
```

```jsx
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```

_WIP_

### Events

_TBA_

### Props

_TBA_

### States

_TBA_

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
