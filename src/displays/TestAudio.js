import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Play } from 'react-bootstrap-icons';

const TestAudio = () => {
  return (
    <div>
      <GlossaryItem word='test' />
    </div>
  )
}

const GlossaryItem = ({ word, audio_url }) => {
  const [playAudio, setPlayAudio] = useState(false)

  const fetchAudioFile = async () => {
    setPlayAudio(true)
  }

  if (playAudio) {
    const audio = new Audio('https://nah-vocab-audios.s3.us-east-2.amazonaws.com/Mal%C3%ADntzin.m4a')
    audio.play();
  }

  return (
    <div>
      <span>{word}</span>
      <Button onClick={fetchAudioFile}>
        <Play />
      </Button>
    </div>
  )
}

export default TestAudio
