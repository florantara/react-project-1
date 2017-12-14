import React, { Component } from 'react'
import '../App.css'
import List from './List'
import Search from './Search'
import PageNotFound from './PageNotFound'
import * as BooksAPI from "../BooksAPI"
import { Route, Switch } from 'react-router-dom'

class BooksApp extends Component {

    constructor(props){
        super(props)
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        BooksAPI.getAll().then( ( books ) => {
            this.setState({ books })
        })
    }

    updateBookData( book, shelf) {

        BooksAPI.update( book, shelf ).then( () => {
            book.shelf = shelf
            this.setState(state => ({
                books: state.books.filter( thisBook => thisBook.id !== book.id).concat([book])
            }))
            // ^ Filters out the book that's being updated, then add that same book with the updated shelf to the end of books.
        })

    }

    render() {
        return (
            <div className="app">
                <div className="list-books">
                    <Switch>

                        <Route exact path="/search" render={ () => (
                            <Search myReads={this.state.books} onUpdateBookItem={this.updateBookData.bind(this)}/>
                        ) } />

                        <Route exact path="/" render={ () => (
                            <List booksList={this.state.books} onUpdateBookItem={this.updateBookData.bind(this)}/>
                        ) } />

                        <Route component={PageNotFound} />

                    </Switch>

                </div>
            </div>

        )
    }
}

export default BooksApp