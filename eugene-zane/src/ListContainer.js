import React from 'react';
import Book from './Book';


function ListContainer(props){

  const booklist=props.books.map((book,index)=>{
    const title=book.title
    const description=book.description
    const author=book.author===undefined?'':`Author: ${book.author.join(', ')}`
    const price=book.price
    const image=book.image
    return <Book key={index} title={title} description={description} author={author} price={price} image={image} />
    
  })

  return(
    <div>
    {booklist}
    </div>

  )
}

export default ListContainer;