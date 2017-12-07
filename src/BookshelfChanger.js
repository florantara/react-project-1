import React from 'react'

const BookshelfChanger = ({ inShelf, handleBookshelfChanger }) => {

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
        .map( currentlyIn => currentlyIn.label )

    const triggerBookshelfChanger = ( to ) => {
         handleBookshelfChanger( to )
     }

    return(
        <div className="book-shelf-changer">
            <select onChange={(event) => { triggerBookshelfChanger(event.target.value) }}>

                <option defaultValue>Now in: {currentShelf}</option>
                <option value="none" disabled> Move to:</option>

                {availableShelves}



                <option value="none">None</option>
            </select>
        </div>
    )
}

export default BookshelfChanger