import Book from "../models";
import axios from "axios";

//TODO: Create a function to save the auth token in a http only cookiee

function getHeader(token){
    return {
            JwtToken : localStorage.getItem("jwtToken"),
            IdToken : localStorage.getItem("idToken"),
    }
}


export const getBooks = async (query) =>{
    const response = axios.post(
        "http://localhost:8000/api/v1/books",
        {
            "query": query
        },
        {
            headers : getHeader()
        }
    ).then((response) =>{
        console.log(response);
                const listOfBooks = []

                    for(const book of response.data){
                        const newBook = new Book();
                                    newBook.authorName = book.author_name;
                                    newBook.bookName = book.book_name;
                                    newBook.reason = book.reason;
                                    listOfBooks.push(newBook);
                                }
                    console.log(listOfBooks)
            return listOfBooks
    }).catch((error) =>{
        console.log(error);
        return null
    })
    
}