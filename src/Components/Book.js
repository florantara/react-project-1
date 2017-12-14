import React from 'react'
import BookshelfChanger from './BookshelfChanger'
import PropTypes from 'prop-types'

const Book = ({ moveToShelf, book, inShelf }) => {

    const specifyShelf = ( book, shelf ) => {

        if( moveToShelf ){
            moveToShelf( book, shelf )
        }
    }


    const cover = book.imageLinks ? book.imageLinks.smallThumbnail : 'http://via.placeholder.com/128x193?text=No%20Cover'

    return(

        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cover})` }}></div>
                    <BookshelfChanger inShelf={inShelf ? inShelf : book.shelf} book={book} handleBookshelfChanger={specifyShelf} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{ book.authors ? book.authors.join(', ') : 'Unknown author'}</div>
            </div>
        </li>
    )
}

export default Book


Book.propTypes = {
    moveToShelf: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
}