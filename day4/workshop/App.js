import React, { useReducer, useContext, useEffect, createContext } from "react";
import { createTheme, ThemeProvider, CssBaseline, Button, Container, TextField, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Brightness4, Brightness7, Delete, Edit } from "@mui/icons-material";

const ThemeContext = createContext();

const themeReducer = (state) => (state === "light" ? "dark" : "light");
const notesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];
    case "DELETE_NOTE":
      return state.filter((_, index) => index !== action.payload);
    case "EDIT_NOTE":
      return state.map((note, index) => (index === action.payload.index ? action.payload.newNote : note));
    default:
      return state;
  }
};

const App = () => {
  const [themeMode, dispatchTheme] = useReducer(themeReducer, localStorage.getItem("theme") || "light");
  const [notes, dispatchNotes] = useReducer(notesReducer, JSON.parse(localStorage.getItem("notes")) || []);

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [themeMode, notes]);

  const theme = createTheme({ palette: { mode: themeMode } });

  return (
    <ThemeContext.Provider value={{ themeMode, dispatchTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <ThemeToggle />
          <NoteManager dispatchNotes={dispatchNotes} notes={notes} />
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

const ThemeToggle = () => {
  const { themeMode, dispatchTheme } = useContext(ThemeContext);
  return (
    <Button onClick={() => dispatchTheme()}> 
      {themeMode === "light" ? <Brightness4 /> : <Brightness7 />} 
    </Button>
  );
};

const NoteManager = ({ dispatchNotes, notes }) => {
  const [input, setInput] = React.useState("");
  const [editIndex, setEditIndex] = React.useState(null);

  const handleAddOrEditNote = () => {
    if (input.trim()) {
      dispatchNotes(editIndex !== null ? { type: "EDIT_NOTE", payload: { index: editIndex, newNote: input } } : { type: "ADD_NOTE", payload: input });
      setInput("");
      setEditIndex(null);
    }
  };

  return (
    <>
      <TextField label="New Note" value={input} onChange={(e) => setInput(e.target.value)} fullWidth />
      <Button onClick={handleAddOrEditNote} variant="contained" color="primary">
        {editIndex !== null ? "Edit Note" : "Add Note"}
      </Button>
      <List>
        {notes.map((note, index) => (
          <ListItem key={index}>
            <ListItemText primary={note} />
            <IconButton onClick={() => { setInput(note); setEditIndex(index); }}>
              <Edit />
            </IconButton>
            <IconButton onClick={() => dispatchNotes({ type: "DELETE_NOTE", payload: index })}>
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default App;
