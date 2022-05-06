import React from 'react';
import BookShelf from './BookShelf';
import { useParams } from 'react-router-dom';


function BookShelfPage({ booksList, bookShelves, deleteBook }) {
    
    const params = useParams();
    const shelfId = params.shelfId
    const foundShelf = bookShelves.find((x) => x.id === shelfId)
    const foundBooks = booksList.filter((x) => x.shelves === foundShelf.name)

    return (
        <BookShelf bookShelves={foundShelf} booksList={foundBooks} />
    )
}

export default BookShelfPage;
