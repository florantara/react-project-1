import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const Bookshelf = ({ onUpdateBook, books, shelfTitle }) =>{

    const moveToShelf = (book, shelf) => {
        onUpdateBook(book, shelf)
    }

    return(

        <div className="bookshelf">

            <h2 className="bookshelf-title">{shelfTitle}</h2>

            <div className="bookshelf-books">

                <ol className="books-grid">

                    { books.map( book => (
                        <Book book={book}
                            key={book.id}
                            moveToShelf={moveToShelf}
                        />

                    ) ) }

                </ol>

            </div>

        </div>
    )
}

export default Bookshelf

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
    shelfTitle: PropTypes.string
}
