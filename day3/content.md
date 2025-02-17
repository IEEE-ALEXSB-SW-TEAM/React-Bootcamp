**Outline**  

1. **Introduction**  
   - Recap of previous sessions and objectives for Session 3

2. **API Calls**  
   - What is the Internet  
   - RESTful APIs  
   - Making API calls in React  
   - Using `fetch` and `axios`  
   - Handling API responses  
   - Error handling  
   - Async/Await

3. **Side Effects (useEffect)**  
   - What is a side effect?  
   - Why we need side effects  
   - How `useEffect` works (dependencies, cleanup)  
   - Patterns  
     - ComponentDidMount (Empty dependency array)  
     - ComponentDidUpdate (Specifying dependencies)  
     - ComponentWillUnmount (Cleanup function)

4. **Routing**  
   - What is routing?  
   - Why routing is needed  
   - Using `react-router-dom`  
   - Basic routing (`BrowserRouter`, `Route`, `Link`)  
   - Nested routing  
   - Route parameters

5. **Related Topics**  
   - Context API  
   - `useMemo`  
   - `useCallback`

6. **Workshop**  
   - Building a small React application that:  
     - Makes an API call  
     - Uses `useEffect` for side effects  
     - Implements routing for different pages  

---

### 1. Introduction
In this session, you’ll learn how to:

- Interact with external data sources by making API calls from React.
- Manage and organize side effects using the `useEffect` hook.
- Implement client-side routing with `react-router-dom` for building multi-page experiences in a single-page application (SPA).

By the end of this session, you should be comfortable fetching data, handling side effects, and navigating through different views in your React application.

---

### 2. API Calls

#### 2.1 What is the Internet
- A global system of interconnected computer networks where data travels using common communication protocols (TCP/IP).

#### 2.2 RESTful APIs
- **REST (Representational State Transfer)**: A set of guidelines for building scalable web services.
- Operations commonly include:
  - **GET**: Retrieve data
  - **POST**: Create data
  - **PUT/PATCH**: Update data
  - **DELETE**: Remove data

#### 2.3 Making API Calls in React
- React itself doesn’t provide a built-in method for making HTTP requests.
- Common approaches:
  - **`fetch`**: A native browser API.
  - **`axios`**: A popular third-party library.

#### 2.4 Using `fetch` and `axios`
- **`fetch` example**:
  ```jsx
  // Using fetch in a React component
  import React, { useEffect, useState } from 'react';

  function FetchComponent() {
    const [data, setData] = useState(null);
              
     function fetchdata (){             
             fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => response.json())
                .then(json => setData(json))
                .catch(error => console.error('Error fetching data:', error));
            }

    return (
      <div>
        {data ? (
          <div>
            <button onclick="fetchdata()">fetch</button>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }

  export default FetchComponent;
  ```
- **`axios` example**:
  ```jsx
  // Using axios in a React component
  import React, { useEffect, useState } from 'react';
  import axios from 'axios';

  function AxiosComponent() {
    const [data, setData] = useState(null);
           function fetchdata (){             
             axios.get('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => setData(response.data))
                .catch(error => console.error('Error fetching data:', error));
           }

      
    return (
      <div>
        {data ? (
          <div>
            <button onclick="fetchdata()">fetch</button>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }

  export default AxiosComponent;
  ```


#### 2.5 Handling API Responses
- Check HTTP status codes and handle them appropriately (e.g., 200 for success, 404 for not found).
- Convert response to JSON (if using `fetch`) or rely on Axios to auto-parse JSON.

#### 2.6 Error Handling
- Use `try...catch` blocks (particularly with `async/await`), or `.catch()` with Promises.
- Display user-friendly messages on errors.

#### 2.7 Async/Await
- Syntactic sugar for Promises that makes asynchronous code look synchronous:
  ```jsx
  async function getPost(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  }
  ```

---

### 3. Side Effects (useEffect)

#### 3.1 What is a Side Effect?
- Any operation that occurs outside the normal flow of rendering, such as:
  - Data fetching
  - Subscriptions
  - Manually changing the DOM
  - Setting up timers

#### 3.2 Why We Need Side Effects
- React components are intended to be pure (output depends solely on input).
- Side effects handle interactions with external systems or APIs.

#### 3.3 How `useEffect` Works
- **`useEffect`** is a hook that accepts:
  - A function where you perform the side effect.
  - An optional dependency array that determines when the effect should rerun.

#### 3.4 Patterns
1. **ComponentDidMount**: Run once when the component mounts.
   ```jsx
   useEffect(() => {
     // Code runs on mount
   }, []); // Empty dependencies => runs once
   ```
2. **ComponentDidUpdate**: Run when specified dependencies change.
   ```jsx
   useEffect(() => {
     // Code runs when count changes
   }, [count]);
   ```
3. **ComponentWillUnmount**: Cleanup logic within the returned function.
   ```jsx
   useEffect(() => {
     const timer = setInterval(() => {
       console.log('Tick');
     }, 1000);

     // Cleanup
     return () => clearInterval(timer);
   }, []);
   ```

**Side Effect Example**:
```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Seconds passed: {count}</p>
    </div>
  );
}

export default Timer;
```
---

### 4. Routing

#### 4.1 What is Routing?
Routing in React is a client-side technique that allows you to map specific URL paths (e.g., `/home`, `/about`) to specific components. Instead of doing full page reloads, React swaps out components to simulate multi-page navigation within a single-page application.

#### 4.2 Why Routing Is Needed
- Improves user experience by handling navigation within the browser, avoiding full reloads.
- Makes applications feel like traditional multi-page sites while still using client-side rendering.
- Allows you to organize and maintain different sections of your UI more effectively.

#### 4.3 Using `react-router-dom`
1. **Installation**  
   ```bash
   npm install react-router-dom
   ```
2. **Key Components**  
   - **`BrowserRouter`**: The top-level component that enables React Router features.  
   - **`Routes`** and **`Route`**: Define which component to render for a given path.  
   - **`Link`** and **`NavLink`**: Navigate without refreshing the entire page.

**Basic Example**:
```jsx
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | {' '}
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```
- The user can now navigate to `/` for **Home** and `/about` for **About**.

#### 4.4 Nested Routing
You can have routes inside another component to render different subcomponents based on the URL. This is helpful if you have a dashboard-like layout with multiple subsections.

**Nested Routing Example**:
```jsx
// Dashboard.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Overview from './Overview';
import Profile from './Profile';
import Reports from './Reports';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="overview">Overview</Link> | {' '}
        <Link to="profile">Profile</Link> | {' '}
        <Link to="reports">Reports</Link>
      </nav>

      <div>
        <Routes>
          <Route path="overview" element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="reports" element={<Reports />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
```
```jsx
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
```
- Here, the `Dashboard` component serves as a parent route with links and child routes for `overview`, `profile`, and `reports`.

#### 4.5 Route Parameters
Often you need to pass a dynamic value in the URL (e.g., user ID, product ID). React Router uses parameters (`:paramName`) to accomplish this.

**Route Parameters Example**:
```jsx
// Users.js
import React from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
  ];

  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        <Link key={user.id} to={`/users/${user.id}`}>
          <p>{user.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Users;
```
```jsx
// UserDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { userId } = useParams();
  return <h2>User Details for ID: {userId}</h2>;
};

export default UserDetails;
```
```jsx
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './Users';
import UserDetails from './UserDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
```
- The `useParams()` hook reads the `:userId` from the URL, allowing you to fetch or display data specific to that ID.

---

### 5. Related Topics

#### 5.1 Context API
- Allows you to share global data (e.g., user info, theme settings) without passing props down every level.
- Steps:
  1. Create a Context with `React.createContext()`.
  2. Wrap children in a Provider component, supplying the shared data.
  3. Consume the data in nested components via `useContext`.

**Example**:
```jsx
// themeContext.js
import React from 'react';
export const ThemeContext = React.createContext();

// App.js
import React, { useState } from 'react';
import { ThemeContext } from './themeContext';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* Rest of your app */}
    </ThemeContext.Provider>
  );
}

export default App;

// NestedComponent.js
import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';

function NestedComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme is {theme}</p>
      <button onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}>
        Toggle Theme
      </button>
    </div>
  );
}

export default NestedComponent;
```

#### 5.2 useMemo
- **useMemo** is used to memoize expensive computations.  
- It re-computes only when dependencies change.

```jsx
import React, { useState, useMemo } from 'react';

function FibonacciCalculator() {
  const [num, setNum] = useState(0);

  const fibValue = useMemo(() => {
    function fibonacci(n) {
      if (n < 2) return n;
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
    return fibonacci(num);
  }, [num]);

  return (
    <div>
      <p>Fibonacci of {num}: {fibValue}</p>
      <button onClick={() => setNum(num + 1)}>Increment</button>
    </div>
  );
}

export default FibonacciCalculator;
```
- Without `useMemo`, the `fibonacci` function would re-run on every render, even if `num` hasn’t changed.

#### 5.3 useCallback
- **useCallback** memoizes a function itself, preventing it from being re-created on every render.  
- Particularly useful when passing callback props to child components, which could otherwise cause unnecessary re-renders.

```jsx
import React, { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onIncrement={increment} />
    </div>
  );
}

function ChildComponent({ onIncrement }) {
  console.log('Child re-rendered');
  return (
    <button onClick={onIncrement}>Increment</button>
  );
}

export default Parent;
```
- With `useCallback`, the `increment` function is not redefined on every render, so `ChildComponent` won’t needlessly re-render unless its props change.

---

### 6. Workshop

**Goal**  
Create a small React application that ties together API fetching, `useEffect`, routing (with nested routes and parameters), and optionally uses the Context API, `useMemo`, or `useCallback`.

**Suggested Steps**:
1. **Initialize the Project**  
   ```bash
   npx create-react-app my-react-workshop
   cd my-react-workshop
   npm install react-router-dom axios
   npm start
   ```
2. **Create Main Pages**  
   - **Home** page (simple welcome message).
   - **Posts** page (fetch and display posts from API).
   - **PostDetails** page (show a single post by ID).
3. **Add Nested Routes** (e.g., Admin or Dashboard section).
4. **Use Route Parameters** to load individual post details.
5. **Optional**: Wrap your app with a **ThemeContext** to switch between light/dark mode.  
6. **Optional**: Memoize expensive calculations or callback functions to improve performance.

**Example Code**  
You can find the example code in files [App.js](workshop/App.js), [Posts.js](workshop/Posts.js), and [PostDetails.js](workshop/PostDetails.js).
