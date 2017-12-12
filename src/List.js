import React, { Component } from "react"
import Bookshelf from './Bookshelf'

class List extends Component{

    updateBook( book, shelf ){
        this.props.onUpdateBookItem( book, shelf)
    }

    render(){

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
                                books={this.props.booksList.filter( books => books.shelf === shelf.type )}
                                shelfTitle={shelf.title}
                                onUpdateBook={this.updateBook.bind(this)}/>
                        ))
                    }

                </div>
            </div>
        )
    }
}

export default List