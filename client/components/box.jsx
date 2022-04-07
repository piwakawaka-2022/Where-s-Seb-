import React, { useState, useEffect } from 'react'


const Box = (props) => {

// const [style, setStyle] = useState({})
//test
  console.log(props)
  return (
    <div className="box">
      <p className='location'>{props.location}</p>
    </div>
  )
}

export default Box