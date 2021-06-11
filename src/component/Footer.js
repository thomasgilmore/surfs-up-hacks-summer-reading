import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                Summer Reading Website by <a target="_blank" href="https://github.com/thomasgilmore95" rel="noreferrer">Thomas</a>. API used for Books is <a target="_blank" href="https://developer.nytimes.com/docs/books-product/1/overview" rel="noreferrer">NYTimes Books</a>. Main picture from <a target="_blank" href="https://unsplash.com/" rel="noreferrer">Unsplash</a>. <a href="https://icons8.com/icon/119436/book">Book icon by Icons8</a>
            </div>
        )
    }
}
