import React from 'react';
import BooksList from './BooksList';
import NewBookForm from './NewBookForm';
import BookShelfLinks from './BookShelfLinks';




function HomePage({ booksList, bookShelves, deleteBook, addBook }) {

    return (
        <div className="container-fluid d-flex flex-wrap mt-5">
            <div className="col col-3">
                <NewBookForm booksList={booksList} addBook={addBook} />
                <h3 className="ms-5">BOOKSHELVES</h3>
                <BookShelfLinks bookShelves={bookShelves} booksList={booksList} />
            </div>
            <div className="col m-5">
                <BooksList deleteBook={deleteBook} booksList={booksList} addBook={addBook} bookShelves={bookShelves} />
            </div>
        </div>

    )
}

export default HomePage;