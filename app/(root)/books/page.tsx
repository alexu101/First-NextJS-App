import React from 'react'

const Books = async () => {
  const response = await fetch("http://localhost:3000/api/books")
  if (!response.ok){
    throw Error("No books found !")
  }

  type Book = {
    id: number,
    name: string
  }

  const books: Book[] = await response.json()

  return (
    <div>
      <h1>BOOKS</h1>
      <ul>
        {books.map((book) => <li key={book.id}>{book.name}</li>)}
      </ul>
    </div>
  )
}

export default Books