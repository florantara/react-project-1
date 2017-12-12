import React, { Component } from 'react'
import './App.css'
import List from './List'
import Search from './Search'
import * as BooksAPI from "./BooksAPI"
import { Route } from 'react-router-dom'

class BooksApp extends Component {

    constructor(props){
        super(props)
        this.state = {
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

                    <Route exact path="/search" render={ () => (
                        <Search onUpdateBookItem={this.updateBookData.bind(this)}/>
                    ) } />

                    <Route exact path="/" render={ () => (
                        <List booksList={this.state.books} onUpdateBookItem={this.updateBookData.bind(this)}/>
                    ) } />

                </div>
            </div>


        )
    }
}

export default BooksApp