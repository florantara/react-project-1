import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { debounce } from 'throttle-debounce'
import { Link } from 'react-router-dom'

// On Change inpupt: consult API with value entered

class Search extends Component {

    constructor(props){
        super(props)
        this.state = {
            searchQuery: "",
            books: [],
            nothingFound: false
        }
    }

    // Debounce fetching results to prevent fetching on every keystroke

    handleResults = debounce( 500,  ( query ) =>{

        // Go fetch results, setState fo books, and nothingFound

        if ( query ) {

            BooksAPI.search( query ).then( results =>
                this.setState({
                    books: results,
                    nothingFound: false
                })
            ).catch( reason => {
                this.setState({
                    books: [],
                    nothingFound: true
                })
            })
        } else {
            this.setState({
                books: [],
                nothingFound: true
            })
        }
    })

    handleQuery( query ){
        this.setState({
                searchQuery: query
            }, this.handleResults( query )
        )
    }

    moveToShelf( book, destination){
        this.props.onUpdateBookItem( book, destination )
    }

    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">

                        <input type="text" placeholder="Search by title or author" value={this.state.searchQuery} onChange={ e => this.handleQuery( e.target.value ) } />

                    </div>
                </div>
                <div className="search-books-results">

                    { this.state.nothingFound ? <p>No results.</p> :

                        <ol className="books-grid">

                            { this.state.books.map( book =>
                                <Book
                                    key={book.id}
                                    book={book}
                                    moveToShelf={this.moveToShelf.bind(this, book)}
                                />
                             ) }

                        </ol>
                    }
                </div>
            </div>
        )
    }
}

export default Search