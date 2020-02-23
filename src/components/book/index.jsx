import React from "react";
import "./styles.scss";

const Book = ({ title, desc, author }) => (
  <div className="book-container">
    <h2>{title}</h2>
    <div className="desc content">{desc}</div>
    <hr />
    <div className="author content">{author}</div>
  </div>
);

export default Book;
