import { useEffect } from "react";
import { useState } from "react";
import { Spinner, Alert } from "react-bootstrap";
import { toast } from "react-toastify";
import BookCard from "../miniComponents/BookCard";
import Book from "../models";
import axios from "axios";

const Favourites = () => {
  const [favouriteBooks, setFavouriteBooks] = useState([]);
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/favourite/", {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      })
      .then((res) => {
        let listOfBooks = [];
        for (const book of res.data) {
          const newBook = new Book();
          newBook.authorName = book.author_name;
          newBook.bookName = book.book_name;
          newBook.reason = book.reason;
          newBook.coverPhoto = book.cover_image;
          newBook.googleBooksLink = book.google_books_url;
          newBook.pageCount = book.page_count;
          newBook.isbn = book.isbn;
          listOfBooks.push(newBook);
        }

        setFavouriteBooks(listOfBooks);
        isLoading(false);
      }).catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
        isLoading(false);
      })
  }, []);
  return (
    <>
      <div>
        <h1 className="font-semibold text-center">Favourites</h1>
        <div className="flex flex-col p-3 gap-1">
          {loading && (
            <Spinner
              animation="border"
              role="status"
              className="my-4 self-center"
            >
              <span className="visually-hidden py-4">Loading...</span>
            </Spinner>
          )}
          {favouriteBooks.map((book) => {
            return (
              <BookCard key={book.id} book={book} favouriteStatus={true} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Favourites;
