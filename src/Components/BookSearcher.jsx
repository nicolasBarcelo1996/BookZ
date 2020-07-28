import React,{useState} from 'react'
import './Books.css'

function BookSearcher({getQuery}) {
 const [filter, setFilter] = useState('')

const OnFilter = (q) =>{
    setFilter(q)
    getQuery(q)
}
    return (
        <div>
            <input type="text"
            className="searchInput"
            name="bookSearch"
            value={filter}
            onChange={(e) => OnFilter(e.target.value)}
            autoFocus
            />
        </div>
    )
}

export default BookSearcher
