
import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Box from './Box'
import Board from './Board'
import boxInfo from '../boxInfo'
import FootballAudio from './Background-audio'



function App() {
  return (

    <div className="container">
      <Board boxes={boxInfo}/>
     </div>
  )
}

export default App

