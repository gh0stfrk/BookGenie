import { useState, useEffect } from "react";
import RenderBooks from "../miniComponents/RenderBooks";
import SearchElement from "../miniComponents/SearchElement";

const MainApp = () => {
    const [books, setBooks] = useState([]);

    const updateBooks = (newBooks) => {
        console.log(newBooks)
        setBooks(newBooks);
      }

    return (
    <>
      <SearchElement updateBookData={updateBooks} />
      <RenderBooks books={books}/>
    </>
  );
}

export default MainApp;