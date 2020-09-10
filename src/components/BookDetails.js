import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import "./BookDetails.css";

function BookDetails({ book }) {
  const { dispatch } = useContext(BookContext);
  return (
    <li
      className="bookDetails"
      onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
    >
      <div className="bookDetails__title">{book.title}</div>
      <div className="bookDetails__author">{book.author}</div>
    </li>
  );
}

export default BookDetails;
