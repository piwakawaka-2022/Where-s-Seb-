import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Box from './Box'


function Board(props) {
  // const grid = Array.from({length: 9}, i => <Box key={i} />)
  // console.log(grid)
  return (
 
    <>
      <div className="grid">
        {props.boxes.map((box) => {
          // console.log(box)
          return(
            <Box
            id={box.id}
            key={box.id}
            location={box.location}
            isSeb={box.isSeb}
            isFlipped={box.isFlipped}
            />

          )
        })}
      </div>
    </>
  )
}

export default Board