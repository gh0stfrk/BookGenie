
import React from 'react'
import BookCard from './BookCard';


const RenderBooks = ({books}) => {
    return Array.isArray(books) && books.length > 0 ? (
        <div className='flex gap-3 p-3 flex-col'>
            {
                books.map((book, index)=>(   
                <BookCard key={index} book={book}/>))
            }
        </div>
      ) : (
                <div className='flex flex-wrap text-center'>
                <h1>No Books Found</h1>
                </div> 
        );
      
}

export default RenderBooks;