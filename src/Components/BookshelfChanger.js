import React from 'react'
import PropTypes from 'prop-types'

const BookshelfChanger = ({ inShelf, book, handleBookshelfChanger }) => {

    const allShelves = [
        {
            name: "wantToRead",
            label: "Want to Read"
        },
        {
            name: "currentlyReading",
            label: "Currently Reading"
        },
        {
            name: "read",
            label: "Read"
        }
    ]

    const availableShelves =
        allShelves
        .filter( shelf =>  shelf.name !== inShelf )
        .map( moveTo => <option key={moveTo.name} value={moveTo.name}>{moveTo.label}</option>
    )

    const currentShelf =
        allShelves
        .filter( shelf =>  shelf.name === inShelf )
        .map( currentlyIn => <option key={currentlyIn.label} defaultValue>Now in: {currentlyIn.label}</option> )

    const triggerBookshelfChanger = ( book, shelf ) => {
         handleBookshelfChanger( book, shelf )
     }

    return(
        <div className="book-shelf-changer">
            <select onChange={(event) => { triggerBookshelfChanger(book, event.target.value) }}>

                {currentShelf}

                <option value="none" disabled> Move to:</option>

                {availableShelves}

                <option value="none">None</option>
            </select>
        </div>
    )
}

export default BookshelfChanger

BookshelfChanger.propTypes = {
    inShelf: PropTypes.string,
    book: PropTypes.object.isRequired,
    handleBookshelfChanger: PropTypes.func.isRequired
}

