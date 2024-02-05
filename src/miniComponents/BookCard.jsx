// BookCard.js

import React from 'react';

const BookCard = ({ book }) => {
  const {amazonLink, authorName, bookName, coverPhoto, googleBooksLink, reason } = book;

  return (
    <div className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg my-4">
      <img className="w-full h-48 object-cover" src={coverPhoto} alt={bookName} />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{bookName}</h2>
        <p className="text-gray-600 mb-2">by {authorName}</p>
        <p className="text-gray-700 mb-4">{reason}</p>  

        <div className="flex justify-between">
          <a
            href={amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
          >
            Buy on Amazon
          </a>

          <a
            href={googleBooksLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-700"
          >
            Read Sample on Google Books
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
