import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import "./BookList.css";
import BookDetails from "./BookDetails";

function BookList() {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="bookList">
      <ul>
        {books.map((book) => (
          <BookDetails book={book} key={book.id} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">
      <p>No books to read at the moment</p>
    </div>
  );
}

export default BookList;
