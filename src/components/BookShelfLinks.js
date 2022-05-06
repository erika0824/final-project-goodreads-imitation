import React from 'react';
import { Link } from 'react-router-dom';

function BookShelfLinks({ bookShelves, booksList }) {

  return (
    <>
      <div className="row d-flex flex-wrap ms-5">
        {bookShelves.map(bookShelf => (
          <div key={bookShelf.id}>
            <Link to={`bookshelves/${bookShelf.id}`} className="links" >{bookShelf.name} </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default BookShelfLinks;