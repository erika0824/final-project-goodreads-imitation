import React from 'react';
import NewBookForm from './NewBookForm';



function AddBookPage({ booksList, addBook }) {

  return (
    <div className="container d-flex ">
      <NewBookForm booksList={booksList} addBook={addBook} />
    </div>
  )
}

export default AddBookPage;