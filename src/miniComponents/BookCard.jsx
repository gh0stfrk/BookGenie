// BookCard.js

import React from "react";
import axios from "axios";
import { useState } from "react";
import { reauthenticateWithRefreshToken } from "../components/googleSignIn/refreshToken";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const BookCard = ({ book, favouriteStatus=false }) => {
  const {
    authorName,
    bookName,
    reason,
    coverPhoto,
    isbn,
    googleBooksLink,
    pageCount,
    categories,
  } = book;

  const [isFavorite, setIsFavorite] = useState(favouriteStatus);

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  const handleFavourite = (status) => {
    setIsFavorite(status);
    const baseUrl = "http://localhost:8000/api/v1";
    axios.post(
      `${baseUrl}/favourite`,
      {
      isbn: isbn, 
      status: status 
      },
      {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
          "Access-Control-Allow-Origin": "*",
        },
      }
    ).then((response) => {
      alert(response.data.message)
      if(response.status === 401){
        reauthenticateWithRefreshToken()
      }
    }).catch((error)=> {
      reauthenticateWithRefreshToken()
      alert(error)
    })
  };

  return (
    <div className="flex gap-3 bg-gray-50 p-3 rounded flex-col md:flex-row justify-between">
      <img
        src={coverPhoto}
        width={150}
        className="object-contain md:self-start rounded self-center"
      />
      <div className="flex flex-col gap-0.5 max-w-2xl">
        <p className="font-semibold text-lg">{bookName}</p>
        <div className="flex text-sm">
          <p>{authorName}</p>
        </div>
        <div className="text-sm font-extralight">{truncateString(reason, 350)}</div>
      </div>
      <div className="my-3 flex gap-2 justify-between md:self-end">
        <a
          className="block rounded p-1 text-white bg-black no-underline text-center w-fit px-4
          self-center md:self-start"
          href={googleBooksLink}
          target="_blank"
        >
          Google Books
        </a>
        {isFavorite ? (
          <MdFavorite
            size={30}
            className="text-red-500"
            onClick={() => handleFavourite(false)}
          />
        ) : (
          <MdFavoriteBorder size={30} onClick={() => handleFavourite(true)} />
        )}
      </div>
    </div>
  );
};

export default BookCard;
