import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'

class Book extends Component {

    specifyShelf( selection ){
        this.props.moveToShelf( selection )
    }

    render(){

        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.image})` }}></div>
                        <BookshelfChanger inShelf={this.props.shelf} handleBookshelfChanger={this.specifyShelf.bind(this)} />
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{this.props.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book