import React from "react";
import "./App.css";
import Search from "./containers/Search";
import BookList from "./components/booklist";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Search Books</h1>
        <Search />
        <BookList />
      </header>
    </div>
  );
}

export default App;
