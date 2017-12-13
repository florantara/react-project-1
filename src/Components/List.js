import React from "react"
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const List = ({ onUpdateBookItem, booksList }) =>{

    const updateBook = ( book, shelf ) =>{
        onUpdateBookItem( book, shelf)
    }

    const shelves = [
        {
            "title": "Currently Reading",
            "type": "currentlyReading",
        },
        {
            "title": "Want To Read",
            "type": "wantToRead",
        },
        {
            "title": "Read",
            "type": "read",
        }
    ];

    return(
        <div>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">

                {
                    shelves.map ( shelf => (
                        <Bookshelf
                            books={booksList.filter( books => books.shelf === shelf.type )}
                            key={shelf.type}
                            shelfTitle={shelf.title}
                            onUpdateBook={updateBook}/>
                    ))
                }

            </div>
            <div className="open-search">
                <Link to="/search">More books</Link>
            </div>
        </div>
    )

}

export default List

List.propTypes = {
    onUpdateBookItem: PropTypes.func.isRequired,
    booksList: PropTypes.array.isRequired
}