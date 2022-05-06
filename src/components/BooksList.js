import React from 'react';
import Book from './Book';
import { Table } from 'react-bootstrap';




function BooksList({ booksList, deleteBook, bookShelves }) {
  return (
    <>
      <h1>LIBRARY</h1>
      <div className="row d-flex flex-wrap" >
        <Table responsive="xl" hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Rating</th>
              <th>Shelves</th>
              <th>remove</th>
            </tr>
          </thead>
          {booksList.map(book => (
            <Book
              book={book}
              key={book.id}
              // bookId={book.id}
              booksList={booksList}
              deleteBook={deleteBook}

            />
          ))}

        </Table>
      </div>
    </>

  )
}

export default BooksList;
