import React from 'react';
import BookShelf from './BookShelf';
import { useParams } from 'react-router-dom';


function BookShelfPage({ booksList, bookShelves}) {
    
    const params = useParams();
    const shelfId = params.shelfId
    const foundShelf = bookShelves.find((x) => x.id === shelfId)
    const foundBooks = booksList.filter((x) => x.shelves === foundShelf.name)

    return (
        <div className="container m-5">
        <h1 className="ms-5">{foundShelf.name}</h1>
         <BookShelf bookShelves={foundShelf} booksList={foundBooks} />
        </div>
       
    )
}

export default BookShelfPage;
