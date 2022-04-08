import React from 'react';

function FootballAudio() {
  let audio = new Audio("/audio/football-sounds.mp3")

  const start = () => {
    audio.play()
  }

  return (
    <div className="button">
      <button onClick={start}>Add Atmosphere!</button>
    </div >
  );
}

export default FootballAudio

