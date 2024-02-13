
import React from 'react'
import BookCard from './BookCard';


const RenderBooks = ({books}) => {
    
    console.log("RenderBooks Called")

    return Array.isArray(books) && books.length > 0 ? (
        <div className='flex flex-wrap -m-3 gap-3 p-5 justify-center'>
            {
                books.map((book, index)=>(   
                <BookCard key={index} book={book}/>))
            }
        </div>
      ) : (
                <div className='flex flex-wrap -m-4 text-center'>
                <h1>No Books Found</h1>
                </div> 
        );
      
}

export default RenderBooks;