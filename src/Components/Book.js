import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'
import PropTypes from 'prop-types'

class Book extends Component {

    specifyShelf( selection ){
        if( this.props.moveToShelf ){
            this.props.moveToShelf( selection )
        }
    }

    render(){
        const { book } = this.props;

        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                        <BookshelfChanger inShelf={book.shelf} handleBookshelfChanger={this.specifyShelf.bind(this)} />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book


Book.propTypes = {
    moveToShelf: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
}