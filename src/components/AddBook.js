import React, { useState, useContext } from "react";
import "./AddBook.css";
import { BookContext } from "../contexts/BookContext";

function AddBook() {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <form className="addBook" onSubmit={handleSubmit}>
      <input
        className="addBook__field"
        required
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="addBook__field"
        required
        type="text"
        placeholder="Book author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input className="addBook__button" type="submit" value="Add Book" />
    </form>
  );
}

export default AddBook;
