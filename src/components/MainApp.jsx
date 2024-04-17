import { useState, useEffect } from "react";
import RenderBooks from "../miniComponents/RenderBooks";
import SearchElement from "../miniComponents/SearchElement";
import Hero from "../miniComponents/Hero";
import Footer from "../miniComponents/Footer";

import PromotionalContent from "../miniComponents/PromotionalContent";

const MainApp = () => {
    const [books, setBooks] = useState([])


    const updateBooks = (newBooks) => {
        setBooks(newBooks)
      }

    return (
    <>
    <div className="">
      <Hero/>
      <SearchElement updateBookData={updateBooks} />
      {books.length > 0 && <RenderBooks books={books}/>}
      <PromotionalContent/>
      <Footer/>
    </div>
    </>
  );
}

export default MainApp;