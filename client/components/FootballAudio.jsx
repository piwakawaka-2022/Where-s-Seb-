import React, { useState, useEffect } from 'react'


function FootballAudio() {
  let audio = new Audio("/audio/football-sounds.mp3")

  const start = () => {
    audio.play()
    setAudioState('playing')

  }

  const stop = () => {
    audio.pause()
    setAudioState('paused')
  }

  const [audioState, setAudioState] = useState('paused')

  return (
    <div className="button">
      <button onClick={audioState === 'paused' ? start : stop }>{audioState === 'paused' ? 'Add Atmosphere' : 'Stop Atmosphere' }</button>
    </div >
  );
}

export default FootballAudio

