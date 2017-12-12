import React, { Component } from 'react'
import './App.css'
import List from './List'
import Search from './Search'
import * as BooksAPI from "./BooksAPI"

class BooksApp extends Component {

    constructor(props){
        super(props)
        this.state = {
            /**
            * TODO: Instead of using this state variable to keep track of which page
            * we're on, use the URL in the browser's address bar. This will ensure that
            * users can use the browser's back and forward buttons to navigate between
            * pages, as well as provide a good URL they can bookmark and share.
            */
            showSearchPage: false,
            books: []
        }
    }

    syncBooksAPI = () => {
        BooksAPI.getAll().then( ( books ) => {
            this.setState({ books })
        })
    }

    componentDidMount() {
        this.syncBooksAPI();
    }

    updateBookData( book, shelf) {

        BooksAPI.update( book, shelf ).then( response => {
            this.syncBooksAPI();
        })

    }

    render() {
        return (
            <div className="app">
                <div className="list-books">

                    {this.state.showSearchPage ? (
                        <Search onUpdateBookItem={this.updateBookData.bind(this)}/>
                    ) : (
                        <List booksList={this.state.books} onUpdateBookItem={this.updateBookData.bind(this)}/>
                    )}
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>


        )
    }
}

export default BooksApp
