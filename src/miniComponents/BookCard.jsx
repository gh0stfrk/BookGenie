// BookCard.js

import React from 'react';

const BookCard = ({ book }) => {
  const {authorName, bookName, reason, coverPhoto,isbn, googleBooksLink, pageCount, categories} = book;

  return (
    <div className="flex max-w-xs gap-2 bg-gray-100 p-3 rounded">
      <img
        src={coverPhoto}
        className="object-contain max-w-24 self-start rounded"
      />
      <div className="flex flex-col gap-1 justify-between">
        <p className="font-bold text-lg">{bookName}</p>
        <div className="flex text-sm">
          <p>{authorName}</p>
        </div>
        <div className="text-sm font-extralight my-2 h-">
          {reason}
        </div>
        <a className="rounded bg-green-500 p-1 text-center"
        href={googleBooksLink}
        target='_blank'
        >Google Books</a>
      </div>
    </div>
  );
};

export default BookCard;
