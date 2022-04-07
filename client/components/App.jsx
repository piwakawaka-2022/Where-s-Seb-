
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Box from './Box'


function App() {
  return (
      Array.from({length: 9}, (i) => <Box key={i} />)
  )
}

export default App

