import React from 'react';
import { Button } from 'react-bootstrap';
import StarRating from './StarRating';


export default function Book({ book, deleteBook }) {

  return (
    <>
      <tbody>
        <tr>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{<StarRating />}</td>
          <td>{book.shelves}</td>
          <td><Button variant="outline-danger" onClick={() => deleteBook(book.id)}>X</Button>{' '}</td>
        </tr>
      </tbody>
    </>
  )
}
