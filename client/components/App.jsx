import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Box from './Box'
import Board from './Board'
import boxInfo from '../boxInfo'
import FootballAudio from './FootballAudio'
import Refresh from './Refresh'



function App() {
  const sebLoc = Math.ceil(Math.random()*boxInfo.length)
  boxInfo.find(box => {
    if (box.id == sebLoc) 
      box.isSeb = true
  })

  return (
      <>
    <div className="header">
        <h1>Where is Seb?!</h1>
        <div className="buttons">
          <FootballAudio />
          <Refresh />
        </div>

    </div>
    <div className="container">
      <Board boxes={boxInfo}/>
        
     </div>
    
     </>
  )
}

export default App

