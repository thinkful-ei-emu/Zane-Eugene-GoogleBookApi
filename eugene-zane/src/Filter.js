import React from 'react';


function Filter(){
  return (

    <form>
      <label for='print-type'>Print Type</label>
      <select>
        <option value='All'>All</option>
      </select>
      <label for='book-type'>Book Type</label>
      <select>
        <option value='No Filter'>No Filter</option>
      </select>

    </form>

  )
}
export default Filter;