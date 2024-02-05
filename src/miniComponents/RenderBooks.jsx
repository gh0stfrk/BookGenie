
import React from 'react'
import BookCard from './BookCard';


const RenderBooks = ({books}) => {
    return (
        <div className='flex flex-wrap -m-4'>
            {
                books.map((book, index)=>(   
                <BookCard key={index} book={book}/>))
            }
        </div>
    )
}

export default RenderBooks;