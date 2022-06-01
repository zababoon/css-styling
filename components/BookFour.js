import React from 'react'


// was giving error @emoution/react module not found, disabled for right now.. 
import {StyledBookFour} from "../styles/emotion/StyledEmotion";

const BookFour = () => {
  return (
    <StyledBookFour className="book-four">
        <div className='book-info'>
            <p className='title'>book four</p>
            <p className='author'>book four author</p>
        </div>
    </StyledBookFour>
    
  )
}

export default BookFour