import React from 'react';
import { Link } from 'react-router-dom';


function BookShelfLinks({ bookShelves, booksList }) {

  return (
    <>
      <div className="row d-flex flex-wrap ms-5">
        {bookShelves.map(bookShelf => (
          <div key={bookShelf.id}>
            <Link to={`bookshelves/${bookShelf.id}`} className="links" >{bookShelf.name} ({booksList.filter((x) => x.shelves === bookShelf.name).length}) </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default BookShelfLinks;

