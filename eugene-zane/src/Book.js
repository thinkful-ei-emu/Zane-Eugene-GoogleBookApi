import React from 'react'

function Book (props){

  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.author}</p>
      <p>{props.price}</p>
      <img src={props.image}alt="Cover Art"/>
      <p>{props.description}</p>


    </div>
  )
}

export default Book;