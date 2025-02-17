# React Bootcamp - Session 4

## Table of Contents

- Recap & Discussion
- [Styling in React](#styling-in-react)
   - [Inline Styles](#inline-styles)
   - [CSS Stylesheets](#css-stylesheets)
   - [CSS Modules](#css-modules)
   - [CSS-in-JS](#css-in-js)
   - [Choosing the Right Approach](#choosing-the-right-approach)
- [UI Frameworks & 3rd-Party Libraries](#ui-frameworks--3rd-party-libraries)
   - [Bootstrap](#bootstrap)
   - [Material UI](#material-ui)
- [Advanced State Management](#advanced-state-management)
   - [useContext](#usecontext)
   - [useReducer](#usereducer)
- [Custom Hooks](#custom-hooks-if-time-permits)
   - [useLocalStorage](#uselocalstorage)
   - [useFetch](#usefetch)
- [Workshop](#workshop)

---

## Styling in React

We previously learned about CSS and how to style HTML elements using classes, IDs, and inline styles. In React, styling is an essential aspect of building user interfaces. There are several ways to style React components, each with its own advantages and use cases.

### Inline Styles

Inline styles allow you to apply styles directly to an element using the `style` attribute. The styles are defined as a JavaScript object with camelCased properties.

```jsx
const styles = {
  color: "red",
  fontSize: "20px",
  backgroundColor: "yellow",
};

function App() {
  return <div style={styles}>Hello World</div>;
}
```

###### Preview:

<body>
   <div style="color: red; font-size: 20px; background-color: yellow; border: 2px solid black; padding: 10px; margin: 10px;">
      Hello World
   </div>
</body>

CSS properties must be written in camelCase (`backgroundColor` instead of `background-color`). Values must be strings or numbers where applicable.

Inline styles can also be defined directly in JSX:

```jsx
function App() {
  return (
    <div style={{ color: "red", fontSize: "20px", backgroundColor: "yellow" }}>
      Hello World
    </div>
  );
}
```

Inline styles are useful for quick prototyping and dynamic styling based on props or state. However, they are not recommended for large applications as they can make the code harder to read and maintain.

### CSS Stylesheets

CSS Stylesheets are the most traditional way to style React applications. You can define styles in a separate `.css` file and import it into your component.

_`App.css`_

```css
.App {
  color: red;
  font-size: 20px;
  background-color: yellow;
}
```

_`App.js`_

```jsx
import "./App.css";

function App() {
  return <div className="App">Hello World</div>;
}
```

CSS Stylesheets provide a clear separation between styles and component logic, making it easier to maintain and reuse styles across multiple components. However, all styles are global, which can lead to unintended conflicts.

### CSS Modules

CSS Modules provide scoped styles by automatically generating unique class names, preventing style conflicts.

A CSS Module is similar to a regular CSS file, but it has a .module.css extension.

_`App.module.css`_

```css
.App {
  color: red;
  font-size: 20px;
  background-color: yellow;
}
```

_`App.js`_

```jsx
import styles from "./App.module.css";

function App() {
  return <div className={styles.App}>Hello World</div>;
}
```

CSS Modules are recommended for large applications with multiple components to avoid global style conflicts. However, they require additional setup in build systems like Webpack.

### CSS-in-JS

CSS-in-JS allows writing CSS directly within JavaScript, often using libraries like `styled-components`, `emotion`, and `styled-jsx`. It enables dynamic styling based on props, state, or theme.

Below is an example using `styled-components`:

```jsx
import styled from "styled-components";

const StyledDiv = styled.div`
  color: red;
  font-size: 20px;
  background-color: yellow;
`;

function App() {
  return <StyledDiv>Hello World</StyledDiv>;
}
```

CSS-in-JS libraries offer a more flexible and dynamic way to style components, but they can introduce additional complexity and performance overhead compared to traditional CSS.

### Choosing the Right Approach

| Approach            | Pros                                | Cons                                  |
| ------------------- | ----------------------------------- | ------------------------------------- |
| **Inline Styles**   | Quick and dynamic                   | Hard to maintain, no pseudo-selectors |
| **CSS Stylesheets** | Traditional, easy to use            | Global scope can cause conflicts      |
| **CSS Modules**     | Scoped styles, avoids conflicts     | Requires additional setup             |
| **CSS-in-JS**       | Dynamic, themeable, component-based | Performance overhead, learning curve  |

Each method has its use cases, and the choice depends on the project's needs. For large applications, CSS Modules or CSS-in-JS is often preferable, while smaller projects might work well with traditional CSS stylesheets.

## UI Frameworks & 3rd-Party Libraries

UI frameworks and third-party libraries offer pre-built components and styles that accelerate development and ensure consistency across applications. Some widely used libraries include:

- [**Bootstrap**](https://getbootstrap.com/): A popular CSS framework featuring a vast collection of components and utilities.
- [**Material UI**](https://mui.com/): A React component library based on Google's Material Design guidelines.
- [**Ant Design**](https://ant.design/): A comprehensive design system with React components tailored for enterprise applications.

In this session we will focus on integrating Bootstrap and Material UI into React applications.

### Bootstrap

Bootstrap is a widely used CSS framework that provides numerous components, utilities, and styles for building responsive web applications. It includes features like buttons, forms, modals, and a flexible grid system for layout design.

To use Bootstrap in a React application, install the `react-bootstrap` and `bootstrap` packages:

```bash
npm install react-bootstrap bootstrap
```

To utilize Bootstrap components in a React application, import the required component from `react-bootstrap` and include it in JSX. For example, to use a Bootstrap button:

```jsx
import { Button } from "react-bootstrap";

function App() {
   return <Button variant="primary">Click Me</Button>;
}
```

Bootstrap offers a wide range of components, including forms, modals, alerts, and more. Visit the [Bootstrap documentation](https://react-bootstrap.netlify.app/docs/components/) for a complete list of available components and utilities.

### Material UI

Material UI is a React component library that adheres to Google's Material Design guidelines. It provides an extensive collection of components, icons, themes, and utilities for developing modern web applications.

To integrate Material UI into a React application, install the `@mui/material` and `@mui/icons-material` packages:

```bash
npm install @mui/material @mui/icons-material
```

To use Material UI components in a React application, import the necessary component from `@mui/material` and include it in JSX. For example, to implement a Material UI button:

```jsx
import Button from "@mui/material/Button";

function App() {
   return <Button variant="contained" color="primary">Click Me</Button>;
}
```

Material UI also provides a comprehensive set of icons that can be imported from `@mui/icons-material` and used alongside other components:

```jsx
import AddIcon from "@mui/icons-material/Add";

function App() {
   return <h1><AddIcon /> Add Item</h1>;
}
```

Similar to Bootstrap, Material UI offers a variety of components, themes, and utilities that can be explored in the [Material UI documentation](https://mui.com/components/).

Third-party libraries like Bootstrap and Material UI can help streamline the development process by providing ready-to-use components and styles. They can be especially useful for prototyping, building MVPs, or maintaining design consistency across projects.

## Advanced State Management

In React, state management is a crucial aspect of building complex applications. We previously learned about React's built-in `useState` hook for managing component state. In this session, we will explore more advanced state management techniques using `useContext` and `useReducer`. These hooks provide a way to manage global state and complex state transitions in React applications.

### useContext

The `useContext` hook allows components to consume values from a context without passing props through every level of the component tree. Context provides a way to share data between components without having to pass props explicitly at each level.

To use `useContext`, first create a context using the `createContext` function, then wrap the component tree with a `Context.Provider` component to provide the context value. Components can access the context value using the `useContext` hook.

```jsx
import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Footer />
    </ThemeContext.Provider>
  );
}

function Footer() {
  return <Toolbar />;
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>Current Theme: {theme}</div>;
}
```

In the example above, the `ThemeContext` is created using `createContext` with a default value of `"light"`. The `ThemeContext.Provider` component wraps the `Footer` component and sets the value to `"dark"`. The `Toolbar` component uses the `useContext` hook to access the current theme value.

Notice how the `Toolbar` component can access the `theme` value from the `ThemeContext` without passing it down as a prop twice. This simplifies the component hierarchy and makes it easier to manage shared state across components.

### useReducer

The `useReducer` hook is an alternative to `useState` for managing complex state logic in React applications. It is based on the reducer pattern used in JavaScript and other programming languages.

The `useReducer` hook takes a reducer function and an initial state as arguments, returning the current state and a dispatch function to update the state. The reducer function specifies how the state should change based on the dispatched action.

```jsx
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}
```

In the example above, the `Counter` component uses the `useReducer` hook to manage the state of a counter. The `reducer` function specifies how the state should change based on the dispatched action type. The `dispatch` function is used to trigger state updates by passing an action object with a `type` property.

`useReducer` is useful for managing complex state transitions, especially when the state logic involves multiple actions and conditions. It can help simplify state management and make the code more predictable and maintainable.

## Custom Hooks

Custom hooks are reusable functions that encapsulate common logic in React applications. They allow you to extract stateful logic from components and share it across multiple components. Custom hooks can be used to abstract complex logic, manage side effects, or encapsulate shared functionality.

Custom hooks follow the naming convention of starting with `use` to indicate that they are hooks. They can use other hooks like `useState`, `useEffect`, or even other custom hooks to encapsulate specific behavior.

In this session, we will explore two common custom hooks: `useLocalStorage` and `useFetch`.

### useLocalStorage

The `useLocalStorage` hook provides a simple way to persist data in the browser's `localStorage`. It abstracts the logic of reading and writing data to `localStorage` and synchronizing it with component state.

```jsx
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```

The `useLocalStorage` hook takes a `key` and an `initialValue` as arguments and returns a stateful value and a setter function. It reads the value from `localStorage` on initial render and updates `localStorage` whenever the value changes.

```jsx
function Counter() {
  const [count, setCount] = useLocalStorage("count", 0);

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### useFetch

The `useFetch` hook simplifies data fetching in React applications by encapsulating the logic of making HTTP requests and handling loading, error, and data states.

```jsx
import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
```

The `useFetch` hook takes a `url` as an argument and returns an object with `data`, `loading`, and `error` properties. It uses the `axios` library to make an HTTP GET request to the specified URL and updates the state based on the response.

```jsx
function UserList() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

Custom hooks like `useLocalStorage` and `useFetch` can help simplify common tasks and abstract complex logic into reusable functions. They promote code reusability, readability, and maintainability by encapsulating specific behavior in a modular way.

## Workshop

You will build a note-taking application that allows users to create, edit, and delete notes. The application will use `useReducer` for state management and `localStorage` for data persistence.

Your app also needs to have a fully functional theme switcher that toggles between light and dark themes using `useContext`, `useReducer`, and styled components.
