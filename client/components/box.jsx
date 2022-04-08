import React, { useState, useEffect } from 'react'


const Box = (props) => {

// let boxStyle = 'notFlipped'

const [isFlipped, setIsFlipped] = useState(false)
//useState re-renders the page when we click
//setIsFlipped sets the isFlipped variable and triggers the re-render

function clickHandler(){
  setIsFlipped(true)
}

  // console.log(props)
  return (
    <div onClick={clickHandler} className={`box ${isFlipped ? 'isFlipped' : 'notFlipped'}`}>
      <p className='location'>{!isFlipped && props.location}</p>
    </div>
  )
}


export default Box