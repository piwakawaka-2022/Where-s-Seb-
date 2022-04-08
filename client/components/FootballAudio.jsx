import React, { useState, useEffect } from 'react'
import useSound from 'use-sound';

function FootballAudio() {
  const [audioState, setAudioState] = useState('paused')
  const soundUrl = '/audio/football-sounds.mp3';
  const [play, { pause }] = useSound(soundUrl);

  const playAudio = () => {
  play()
  setAudioState('playing')
  }

  const pauseAudio = () => {
    pause()
    setAudioState('paused')
  }

  return (
    <div className="button">
      <button onClick={audioState === 'paused' ? playAudio : pauseAudio}>{audioState === 'paused' ? 'ADD VIBE' : 'PAUSE VIBE' }</button>
    </div >
  );
}

export default FootballAudio

