import React from 'react';

function SearchForm(){
  return(
    <form>
      <label name='Search'>Search:</label>
      <input type="text"></input>
      <button type='submit'>Search</button><br></br>
      <label for='print-type'>Print Type</label>
      <select>
        <option value='All'>All</option>
        <option value='Book'>Book</option>
        <option value='Magazine'>Magazine</option>
      </select>
      <label for='book-type'>Book Type</label>
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