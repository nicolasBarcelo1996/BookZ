import React from 'react'
import Book from './Book'
import './Books.css'

function Books({items}) {
    return items ? (<section className="cards">
        {items.map(item =>( 
            <Book key={item.id} 
            imagen={item.volumeInfo.imageLinks.thumbnail}
            item={item} />
        ))}
    </section> ) : null
}

export default Books
