import React from 'react';
import Book from './Book';
import { Table } from 'react-bootstrap';


function BookShelf({ booksList, deleteBook, name }) {
    return (
        <div className="col m-5">
            <h1>{name}</h1>
            <Table responsive="xl">
                <thead>
                    <tr>
                        <th>Cover</th>
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
                        booksList={booksList}
                        deleteBook={deleteBook}
                    />
                ))}
            </Table>
        </div>
    )

}

export default BookShelf;


