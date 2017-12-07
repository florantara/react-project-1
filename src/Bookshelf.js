import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component{


    moveToShelf( book, destination){
        this.props.onUpdateBook( book, destination )
    }

    render(){
        return(

            <div className="bookshelf">

                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>

                <div className="bookshelf-books">

                    <ol className="books-grid">

                        { this.props.books.map( book => (
                            <Book
                                key={book.id}
                                authors={book.authors}
                                image={book.imageLinks.smallThumbnail}
                                title={book.title}
                                shelf={book.shelf}
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