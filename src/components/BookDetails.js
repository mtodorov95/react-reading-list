import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import "./BookDetails.css";
import CheckIcon from "@material-ui/icons/Check";

function BookDetails({ book }) {
  const { dispatch } = useContext(BookContext);
  return (
    <li className="bookDetails">
      <div className="bookDetails__info">
        <div className="bookDetails__title">{book.title}</div>
        <div className="bookDetails__author">{book.author}</div>
      </div>
      <div
        className="bookDetails__button"
        onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
      >
        <CheckIcon />
      </div>
    </li>
  );
}

export default BookDetails;
