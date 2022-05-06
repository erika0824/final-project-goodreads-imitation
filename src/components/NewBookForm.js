import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function NewBookForm({ addBook }) {
    
    const [newTitle, setNewTitle] = useState('');
    const onNewTitle = (event) => setNewTitle(event.target.value);

    const [newAuthor, setNewAuthor] = useState('');
    const onNewAuthor = (event) => setNewAuthor(event.target.value);

    const [shelf, setShelf] = useState('');
    const onShelf = (event) => setShelf(event.target.value)



    const onButtonClick = (event) => {
        event.preventDefault();
        const newBook = {
            title: newTitle,
            author: newAuthor,
            shelves: shelf,
        }
        addBook(newBook);
        setNewTitle('');
        setNewAuthor('');
        setShelf(event.target.value = '');
    }

    return (
        <div className="row m-5">
            <h3>Add a New Book</h3>
            <Form className="mb-3">
                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Title" value={newTitle} onChange={onNewTitle} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Author" value={newAuthor} onChange={onNewAuthor} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Read" value={'Read'} onChange={onShelf} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Want to Read" value={'Want to Read'} onChange={onShelf} />
                </Form.Group>
                <Button variant="dark" type="submit" onClick={onButtonClick}>
                    Add Book
                </Button>
            </Form>
        </div>
    )
}

export default NewBookForm;