import React, { Component } from 'react';
import Book from './Book';

class API extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: [],
            books: [],
            booksRows: []
        };
        this.fetchAPI = this.fetchAPI.bind(this);
    }

    fetchAPI() {
        let url = `${window.location.protocol}//${window.location.host}/api`;
        fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res.data);
            let apiResponse = res.data;
            let books = apiResponse.results.books;
            console.log(books);
            let booksRows = [];

            books.forEach(book => {
                let bookISBN = book.primary_isbn10;
                let bookCover = book.book_image;
                let bookTitle = book.title;
                let bookAuthor = book.author;
                let amazonLink = book.amazon_product_url;
                const bookItem = <Book key={bookISBN} img={bookCover} bookTitle={bookTitle} bookAuthor={bookAuthor} amazonLink={amazonLink} />
                booksRows.push(bookItem);
            });

            this.setState({ 
                apiResponse,
                books,
                booksRows
            });
        });
    }

    componentDidMount() {
        window.addEventListener('load', this.fetchAPI);
    }

    render() {
        return (
            <div>
                {this.state.booksRows}
            </div>
        )
    }
}

export default API