import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Play } from 'react-bootstrap-icons';

const GlossaryItem = ({ spanish, nahuatl, audio_url }) => {
  const [playAudio, setPlayAudio] = useState(false)

  const fetchAudioFile = async () => {
    setPlayAudio(true)
  }

  if (playAudio) {
    const audio = new Audio(audio_url)
    audio.play();
  }

  return (
    <div>
      <span>{nahuatl} - {spanish}</span>
      <Button onClick={fetchAudioFile}>
        <Play />
      </Button>
    </div>
  )
}

export default GlossaryItem