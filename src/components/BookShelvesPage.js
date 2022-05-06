import React from 'react';
import BookShelves from './BookShelves';


function BookShelvesPage({ bookShelves, booksList, deleteBook }) {
    
    return (
        <BookShelves booksList={booksList} bookShelves={bookShelves} deleteBook={deleteBook} />
    )
}

export default BookShelvesPage;