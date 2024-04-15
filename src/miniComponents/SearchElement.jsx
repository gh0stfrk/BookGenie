import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Book from "../models";
import { Spinner, Alert } from "react-bootstrap";
import { toast } from "react-toastify";

const SearchElement = ({ updateBookData }) => {
  const textItems = [
    "I like books and I'm a software engineer",
    "I like to learn about spacecrafts, suggest me books",
    "What should I learn to become a spacecraft engineer",
    "I like karate",
    "Recommend books on artificial intelligence and machine learning",
    "Looking for novels with mystery and suspense",
    "Suggest coding books for beginners",
    "Interested in learning about renewable energy, any book recommendations?",
    "I'm a history enthusiast, recommend books on ancient civilizations",
    "Looking for books on mindfulness and meditation",
    "Recommendations for space exploration documentaries",
    "Books for improving communication skills",
    "I enjoy cooking, suggest me some good recipe books",
    "Best books for learning graphic design",
    "Looking for books on astrophysics and black holes",
    "Recommendations for classic literature",
    "Books on entrepreneurship and business strategy",
    "I like to travel, suggest books on different cultures",
    "Best books for understanding climate change",
    "Suggest me a good fantasy series",
    "I'm into photography, recommend books on photography techniques",
    "Books for improving productivity and time management",
    "Looking for books on artificial intelligence ethics",
    "Recommendations for self-help books",
    "I like to paint, suggest books on art history",
    "Books on sustainable living and eco-friendly practices",
    "Suggest me books on ancient philosophy",
    "I enjoy solving puzzles, recommend books on logical reasoning",
    "Looking for books on financial planning and investment",
    "Recommendations for science fiction novels",
  ];

  const [placeholderText, setPlaceholderText] = useState(
    "Type what are you thinking..."
  );
  const [userQuery, setuserQuery] = useState("");

  const [loading, setLoading] = useState(false);

  const handleUserQuery = (e) => {
    setuserQuery(e.target.value);
  };

  const getRandomTextItem = () => {
    const randomIndex = Math.floor(Math.random() * textItems.length);
    return textItems[randomIndex];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderText(getRandomTextItem());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  function getHeader() {
    return {
      "Authorization": localStorage.getItem("Authorization"),
      "Access-Control-Allow-Origin": "*",
      Dummy: "Not_A_Real_Request"
    };
  }

  function getRecommendations() {
    if( localStorage.getItem("Authorization") == null){
      toast("You need to sign in first")
      return;
    }
    if (userQuery == "") {
      toast("Empty Request, Write something to start finding books");
      return;
    }
    updateBookData([]);
    try {
      setLoading(true);
      const query = userQuery;
      axios
        .post(
          "http://localhost:8000/api/v1/books",
          {
            query: query,
          },
          {
            headers: getHeader(),
          }
        )
        .then((response) => {
          const listOfBooks = [];

          for (const book of response.data) {
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
          setLoading(false);
          updateBookData(listOfBooks);
        })
        .catch((error) => {
          setLoading(false);
          alert(error);
        });
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setuserQuery("");
    }
  }

  return (
    <section className="flex flex-col mt-2 mb-3 p-2">
      <div className="text-center flex flex-col">
        <textarea
          placeholder={placeholderText}
          className="w-full border rounded p-2 mb-4 min-h-40 outline-none"
          required
          value={userQuery}
          onChange={handleUserQuery}
          id="user-query"
        ></textarea>

        <button
          className="py-2 px-4 rounded mt-2 border-none
          hover:bg-blue-700 hover:text-white"
          onClick={getRecommendations}
        >
          Suggest Books
        </button>

        {loading && (
          <Spinner animation="border" role="status" className="my-4 self-center">
            <span className="visually-hidden py-4">Loading...</span>
          </Spinner>
        )}
      </div>
    </section>
  );
};

export default SearchElement;
