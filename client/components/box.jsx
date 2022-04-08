import React, { useState, useEffect } from 'react'


const Box = (props) => {

// let boxStyle = 'notFlipped'

const [isFlipped, setIsFlipped] = useState(false)
const [flippedState, setFlippedState] = useState()
//useState re-renders the page when we click
//setIsFlipped sets the isFlipped variable and triggers the re-render

// console.log(props)

function clickHandler(){
  setIsFlipped(true)
  // let flippedState
  if (props.isSeb === true){
    setFlippedState('isSeb')
  } else {
    setFlippedState('isFlipped')
  }
  // console.log(flippedState)
  // console.log(props)
}

  // console.log(props)
  return (
    <div onClick={clickHandler} className={`box ${isFlipped ? flippedState : 'notFlipped'}`}>
      <p className='location'>{!isFlipped && props.location}</p>
    </div>
  )
}


export default Box