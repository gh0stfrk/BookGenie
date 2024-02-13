import { useState, useEffect } from "react";
import RenderBooks from "../miniComponents/RenderBooks";
import SearchElement from "../miniComponents/SearchElement";


const MainApp = () => {
    const [books, setBooks] = useState([])


    const updateBooks = (newBooks) => {
        setBooks(newBooks)
      }

    return (
    <>
      <SearchElement updateBookData={updateBooks} />
      {books.length > 0 && <RenderBooks books={books}/>}
    </>
  );
}

export default MainApp;