import React from 'react';
import BookShelf from './BookShelf';


function BookShelves({ booksList, bookShelves, deleteBook }) {

  return (
    <>
      <div className="container m-5">
        {bookShelves.map(bookShelf => (
          <div key={bookShelf.id}>
            <BookShelf booksList={booksList.filter((x) => x.shelves === bookShelf.name)} name={bookShelf.name} bookShelves={bookShelves} deleteBook={deleteBook} />
          </div>
        ))}
      </div>
    </>
  )
}

export default BookShelves;




