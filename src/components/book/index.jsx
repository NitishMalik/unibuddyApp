import React from "react";
import "./styles.scss";

const Book = ({ title, summary, author }) => (
  <div className="book-container">
    <h2>{title}</h2>
    <div className="desc content">{summary}</div>
    <hr />
    <div className="author content">{author}</div>
  </div>
);

export default Book;
