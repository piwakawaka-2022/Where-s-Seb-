import ReactAudioPlayer from 'react-audio-player';

const FootballAudio = () => {
    return (
        <ReactAudioPlayer
        src="/audio/football-sounds.mp3"
        autoPlay
        controls
        />
    )
}

export default FootballAudio

