import React from "react";
import "./styles.scss";

const BooksList = ({ books }) => (
  <div className="booklist-container">
    {books && books.length > 0 ? (
      books.map(({ id, ...otherProps }) => <Book key={id} {...otherProps} />)
    ) : (
      <p> No Books </p>
    )}
  </div>
);

const mapStateToProps = ({ book }) => ({
  books: book.books
});

export default connect(mapStateToProps)(BooksList);
