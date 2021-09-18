import React from 'react';
import GlossaryItem from '../components/GlossaryItem/GlossaryItem'

const TestAudio = () => {
  return (
    <div>
      <GlossaryItem
        spanish='algo en español'
        nahuatl='algo en nahuatl'
        audio_url='https://nah-vocab-audios.s3.us-east-2.amazonaws.com/Mal%C3%ADntzin.m4a'
      />
    </div>
  )
}

export default TestAudio
