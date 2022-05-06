import React from 'react';
import BooksList from './BooksList';


function BooksPage({ booksList, addBook, deleteBook, bookShelves }) {

    return (
        <div className="container d-flex flex-wrap mt-5">
            <div className="col">
                <BooksList deleteBook={deleteBook} booksList={booksList} addBook={addBook} bookShelves={bookShelves} />
            </div>
        </div>
    )
}

export default BooksPage;