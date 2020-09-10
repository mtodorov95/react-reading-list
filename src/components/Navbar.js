import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import "./Navbar.css";

function Navbar() {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Reading List</h1>
      <p>You have {books.length} books to read</p>
    </div>
  );
}

export default Navbar;
