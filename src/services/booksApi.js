//ended up not using this api, but wanted to keep this file

const BOOKS_ENDPOINT = 'https://625d9cd295cd5855d623693d.mockapi.io/books/book';

const getFetchOptions = (method, data) => ({
    method: method,
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
});

export const getBooks = async() => {
    try {
         //fetch is a promise. use await to wait for this to finish
    const response = await fetch(BOOKS_ENDPOINT);
    //turn response into a json
    const data = await response.json();
    return data;
    }
    catch(e) {
        //error handling
        console.log(e);
        return [];
    }
   
}

export const createBook = async(book) => {
    try {
        const response = await fetch(BOOKS_ENDPOINT, getFetchOptions("POST", book));
        return response;
    }
    catch(e) {
        console.log(e) ;
        return null;
    }
}

export const updateBook = async(book) => {
    try {
        const book = {
            id: book._id,
            title: book.title,
            author: book.author,
            status: book.status
        };
        const response = await fetch(BOOKS_ENDPOINT + "/" + book._id, getFetchOptions("PUT", book));
        return response;
    }
    catch(e) {
        console.log(e);
        return null;
    }
    

}

export const deleteBook = async(book) => {
    try{
        const response = await fetch(BOOKS_ENDPOINT + '/' + book._id,  { method: "DELETE" });
        return response;
    }
    catch(e) {
        console.log(e);
        return null;
    }
}