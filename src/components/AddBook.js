import React, { useState, useContext } from "react";
import "./AddBook.css";
import { BookContext } from "../contexts/BookContext";
import AddIcon from "@material-ui/icons/Add";

function AddBook() {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    setAuthor("");
  };
  return (
    <form className="addBook" onSubmit={handleSubmit}>
      <h4 className="addBook__header">Add a new book</h4>
      <input
        className="addBook__field"
        required
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="addBook__field"
        required
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button className="addBook__button" type="submit">
        <AddIcon />
      </button>
    </form>
  );
}

export default AddBook;
