import React, { useState } from 'react'
import BooksContainer from '../components/BooksContainer'
import InputSearchBook from '../components/InputSearchBook'

/**
 * 
 * @returns Books page
 
 */
export default function Books() {
  const [books, setBooks] = useState([]);
  return (
    <main className='h-full w-full md:w-4/5 md:h-4/5 py-2  rounded  m-auto bg-white'>
        <InputSearchBook setBooks={setBooks} />
        <BooksContainer setBooks={setBooks} books={books} />
    </main>
  )
}
