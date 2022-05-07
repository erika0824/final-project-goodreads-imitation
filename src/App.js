import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './components/HomePage';
import AddBookPage from './components/AddBookPage';
import BooksPage from './components/BooksPage';
import BookShelvesPage from './components/BookShelvesPage';
import BookShelfPage from './components/BookShelfPage';
import { BOOKS, SHELVES } from './data';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, Routes, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './App.css';




/*
Project must meet the following criteria:
Use React Router and have at least 3 pages
Use React Bootstrap or an alternative styling library
Contain at least 10 components
Allow for all CRUD operations
*/

/*
Notes: 3 pages can be:
Main page to add the book, display the books, and a link to the bookshelves
A page to display all of the bookshelves and add a bookshelf
Page to display the bookshelf that’s clicked on with it’s list of books (each book should have a link to an about/review page)

*/

function App() {
  const [booksList, setBooksList] = useState(BOOKS);
  const [bookShelves, setBookShelves] = useState(SHELVES);

  const addBook = (newBook) => {
    newBook.id = uuid();
    setBooksList(currBookList => [...currBookList, newBook])
  };

  const deleteBook = (bookId) => {   
      //filter through booksList and filter a new array without the book with this key
      setBooksList(currBookList => [...currBookList].filter((x) => x.id !== bookId))
  }

  //not using at the moment
  const addBookShelf = (newShelf) => {
    newShelf.id = uuid();
    setBookShelves(currBookShelves => [...currBookShelves, newShelf])
  };


  return (
    <>
    <Navbar>
        <Navbar.Brand as={NavLink} to="/" className="ms-5">Erika's Library</Navbar.Brand>
        <Nav >
            <Nav.Link as={NavLink} to="/" >HOME</Nav.Link>
            <Nav.Link as={NavLink} to="/bookshelves" >BOOKSHELVES</Nav.Link>
            <Nav.Link as={NavLink} to="/books" >BOOKS</Nav.Link>
            <Nav.Link as={NavLink} to="/add-a-book" >ADD A BOOK</Nav.Link>
        </Nav>
    </Navbar>
    <Routes>
        <Route path="/" element={<HomePage booksList={booksList}  bookShelves={bookShelves} deleteBook={deleteBook} addBook={addBook} />} />
        <Route path="/bookshelves" element={<BookShelvesPage booksList={booksList} bookShelves={bookShelves} deleteBook={deleteBook} />} />
        <Route path="/books" element={<BooksPage deleteBook={deleteBook}  booksList={booksList} addBook={addBook} bookShelves={bookShelves}/>} />
        <Route path="/add-a-book" element={<AddBookPage booksList={booksList} addBook={addBook} />} />
        <Route path={"bookshelves/:shelfId"} element= {<BookShelfPage booksList={booksList} bookShelves={bookShelves} deleteBook={deleteBook} />} /> 
    </Routes>
</>
  )
};

export default App;


