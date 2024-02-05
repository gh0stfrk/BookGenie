import Book from "../models";
import axios from "axios";




export const getBooks = async (query) =>{
    const response = axios.post(
        "http://localhost:8000/api/v1/books",
        {
            "query": query
        }
    ).then((response) =>{
        console.log(response);
        const data = response.data;

        const listOfBooks = []

        for(const book of data){
            const newBook = new Book(
                {
                    bookName: book.book_name,
                    authorName: book.author_name,
                    reason : book.reason,
                    coverPhoto: "",
                });
            listOfBooks.push(newBook);
        }

        return listOfBooks;
    }).catch((error) =>{
        console.log(error);
        return null
    })
    
}