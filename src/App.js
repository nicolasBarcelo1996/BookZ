import React,{useState, useEffect} from 'react';
import axios from 'axios'

import './App.css';
import BookSearcher from './Components/BookSearcher'
import Books from './Components/Books'


function App() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')




useEffect(() =>{
 const getItems = async () =>{
  

//const ApiCall = await fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms');
const result = await axios(`https://www.googleapis.com/books/v1/volumes?q=${query}`)

setItems([...result.data.items])
//console.log(result.data.items)
}
getItems();

}, [query])



  return (
    <div className="App">
    <h1>Book Z</h1>
      <BookSearcher getQuery={(q) => setQuery(q)} />
      <Books items={items} />
    </div>
  );
}

export default App;
