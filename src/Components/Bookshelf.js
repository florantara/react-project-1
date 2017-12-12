import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Bookshelf extends Component{

    moveToShelf(book, destination) {
        this.props.onUpdateBook(book, destination)
    }

    render() {
        return(

            <div className="bookshelf">

                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>

                <div className="bookshelf-books">

                    <ol className="books-grid">

                        { this.props.books.map( book => (
                            <Book book={book}
                                key={book.id}
                                moveToShelf={this.moveToShelf.bind(this, book)}
                            />

                        ) ) }

                    </ol>

                </div>

            </div>
        )
    }
}

export default Bookshelf

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
}
