import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import "./App.css";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div className="app">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <AddBook />
      </BookContextProvider>
    </div>
  );
}

export default App;
