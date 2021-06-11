import React from 'react';
import './book.css';

class Book extends React.Component {
    render() {
        return (
            <div className="book">
                <img src={this.props.img} alt="Book Cover" className="bookCover" />
                <p className="bookTitle">{this.props.bookTitle}</p>
                <p className="bookAuthor">{this.props.bookAuthor}</p>
            </div>
        )
    }
}

export default Book