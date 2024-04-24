import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { getAllBooks } from "../api/Books";

/**
 * 
 * @param {BookState} param0 
 * @description take state for can i render books in dom with fetching books from database
 * @returns 
 */
export default function BooksContainer({books, setBooks}) {
   
    useEffect(() => {
        const fetchBooks = async () => {
            const res = await getAllBooks();
            if (res) {
                setBooks(res);
            }
        };
        fetchBooks()
    }, []);
  return (
    <div className="h-[66.8%] overflow-auto">
      <div className=" w-4/5 m-auto flex justify-center md:justify-between items-center flex-wrap gap-3  ">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}
