import React from 'react'

import BookThreeStyles from "../styles/modules/BookThree.module.css";

const BookThree = () => {
  return (
    <div className={BookThreeStyles["book-three"]}>
        <div className='book-info'>
            <p className='title'>book three</p>
            <p className='author'>book three author</p>
        </div>
    </div>
    
  )
}

export default BookThree