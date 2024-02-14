import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import Book from '../models';
import { Spinner, Alert } from 'react-bootstrap';


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
    "Recommendations for science fiction novels"
  ];
  
  const [placeholderText, setPlaceholderText] = useState("Type what are you thinking...")
  const [userQuery, setuserQuery] = useState('')

  const [loading, setLoading] = useState(false)

  const handleUserQuery = (e) => {
    setuserQuery(e.target.value)
  }

  const getRandomTextItem = () => {
    const randomIndex = Math.floor(Math.random() * textItems.length);
    return textItems[randomIndex];
  }

  useEffect(()=>{
    const interval = setInterval(()=>{
        setPlaceholderText(getRandomTextItem())
      },5000)
    
      return () => clearInterval(interval)
  }, []);

  function getHeader(){
    return {
            JwtToken : localStorage.getItem("jwtToken"),
            IdToken : localStorage.getItem("idToken"),
            "Access-Control-Allow-Origin" : "*"
            // Dummy: "Not_A_Real_Request"
    }
  }


  function getRecommendations() {
    if(userQuery == ""){
      alert("Can't submit an empty request, write something in.")
      return
    }
    updateBookData([])
    try {
        setLoading(true)
        const query = userQuery
        axios.post(
          "https://bookgenie-backend.onrender.com/api/v1/books",
          {
              "query": query
          },
          {
              headers : getHeader()
          }
      ).then((response) =>{
          const listOfBooks = []

          for(const book of response.data){
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
          console.log(listOfBooks);
          setLoading(false)
          updateBookData(listOfBooks);
      }).catch((error) =>{
          setLoading(false)
          alert(error);
      })
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setuserQuery('');
    }
  }
  

  return (
    <section className="flex items-center justify-center flex-col my-5">
      <div className="text-center flex items-center justify-center flex-col sm:">
        <h1
        className='font-bold my-2'
        >Find your next best read 📚 </h1>
        <textarea
          placeholder={placeholderText}
          className="w-30 sm:w-80 h-32 border rounded p-2 mb-4"
          required
          value={userQuery}
          onChange={handleUserQuery}
          id='user-query'
        ></textarea>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
        onClick={getRecommendations}
        >Suggest Books</button>
        {loading &&  
          <Spinner animation="border" role="status" className='my-4'>
          <span className="visually-hidden py-4">Loading...</span>
          </Spinner>
        }
      </div>
    </section>
  );


};

export default SearchElement;