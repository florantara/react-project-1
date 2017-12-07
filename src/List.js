import React, { Component } from "react"
import Bookshelf from './Bookshelf'

class List extends Component{


    updateBook( book, shelf ){
        this.props.onUpdateBookItem( book, shelf)
    }

    render(){

        const currentlyReadingBooks = this.props.booksList.filter( books => books.shelf === "currentlyReading" )
        const wantToReadBooks = this.props.booksList.filter( books => books.shelf === "wantToRead" )
        const readBooks = this.props.booksList.filter( books => books.shelf === "read" )

        return(
                <div>

                    <Bookshelf books={currentlyReadingBooks} shelfTitle="Currently Reading" onUpdateBook={this.updateBook.bind(this)}/>

                    <Bookshelf books={wantToReadBooks} shelfTitle="Want To Read" onUpdateBook={this.updateBook.bind(this)}/>

                    <Bookshelf books={readBooks} shelfTitle="Read" onUpdateBook={this.updateBook.bind(this)}/>

                </div>
            )
        }
    }

    export default List