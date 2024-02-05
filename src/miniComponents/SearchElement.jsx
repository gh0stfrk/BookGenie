import React from 'react';
import BookCard from './BookCard';
const SearchElement = ({ placeholderText }) => {

  const getRecommendations = () => { 
    console.log('get recommendations');

  }

  return (
    <section className="flex-1 flex items-center justify-center flex-col">
      <div className="text-center flex items-center justify-center flex-col">
        <textarea
          placeholder={placeholderText}
          className="w-96 h-32 border rounded p-2 mb-4"
        ></textarea>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
        onClick={getRecommendations}
        >Suggest Books</button>
      </div>
    </section>
  );
};

export default SearchElement;