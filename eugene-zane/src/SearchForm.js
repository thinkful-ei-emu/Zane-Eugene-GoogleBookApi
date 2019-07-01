import React from 'react';


function SearchForm(props){
  return(
    <form onSubmit={(e)=>{e.preventDefault();
    props.handleSubmit()}}>
      <label name='Search'>Search:</label>
      <input id='searchForm' type="text"></input>
      <button type='submit'>Search</button><br></br>
      <label htmlFor='print-type'>Print Type</label>
      <select>
        <option value='All'>All</option>
        <option value='Book'>Book</option>
        <option value='Magazine'>Magazine</option>
      </select>
      <label htmlFor='book-type'>Book Type</label>
      <select>
        <option value='No Filter'>No Filter</option>
        <option value='Partial'>Partial</option>
        <option value='Full'>Full</option>
        <option value='E-Book'>E-Book</option>
        <option value='Paid-Ebook'>Paid Ebook</option>
      </select>
    </form>

  )
}

export default SearchForm;