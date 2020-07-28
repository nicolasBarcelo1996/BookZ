import React from 'react'
import Card from '@material-ui/core/Card';
import './Books.css'


function Book({item, imagen}) {

const link = `${item.volumeInfo.infoLink} `
const titulo = `${item.volumeInfo.title}`
const publisher = `${item.volumeInfo.publisher}`
const pageCount = `${item.volumeInfo.pageCount}`
const date = `${item.volumeInfo.publishedDate}`
const autor = `${item.volumeInfo.authors}`

    return (
        <div className="grid">
        

              <a href={link} >
            <Card className="book">

            <h2>{titulo.length < 20 ? `${titulo}` : `${titulo.substring(0, 25)}...` } </h2>
            <img className="image" src={imagen} alt=""/>
            <h2> {autor != null ? `${autor}`  :  null} </h2>
            <p><strong>{publisher} </strong> </p>
            <p>{pageCount} pages </p>
            <p><strong>published:</strong> {date} </p>

            
            </Card>
            </a> 
        </div>
    )
}

export default Book
