// WORKSHOP 2 SOLUTION

import React, { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Rent", amount: 1000 },
    { id: 2, description: "Groceries", amount: 200 },
    { id: 3, description: "Utilities", amount: 300 },
  ]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <ExpenseSummary expenses={expenses} />
    </div>
  );
}

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} deleteExpense={deleteExpense} />
      ))}
    </ul>
  );
}

function ExpenseItem({ expense, deleteExpense }) {
  return (
    <li>
      <span>{expense.description}</span>
      <span>{expense.amount}</span>
      <button onClick={() => deleteExpense(expense.id)}>Delete</button>
    </li>
  );
}

function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 1000) + 1;
    addExpense({ id, description, amount: parseInt(amount) });
    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return <h2>Total Expenses: {total}</h2>;
}

export default App;