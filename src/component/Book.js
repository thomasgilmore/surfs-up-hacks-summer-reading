import React from 'react';
import './book.css';

class Book extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.img} alt="Book Cover" className="bookCover" />
            </div>
        )
    }
}

export default Book