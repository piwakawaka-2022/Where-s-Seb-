import React, { useState, useEffect } from 'react'


const Box = () => {

const [style, setStyle] = useState({height: '40px', width: '40px', backgroundColor: 'green'})

  return (
    <div style={style}></div>
  )
}

export default Box