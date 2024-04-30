import React, { useState } from 'react';
import DrumPad from './DrumPad';

const drumPadsData = [
  { keyTrigger: 'Q', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', displayText: 'Heater 1' },
  { keyTrigger: 'W', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', displayText: 'Heater 2' },
  { keyTrigger: 'E', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', displayText: 'Heater 3' },
  { keyTrigger: 'A', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', displayText: 'Heater 4' },
  { keyTrigger: 'S', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', displayText: 'Clap' },
  { keyTrigger: 'D', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', displayText: 'Open HH' },
  { keyTrigger: 'Z', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', displayText: 'Kick n\' Hat' },
  { keyTrigger: 'X', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', displayText: 'Kick' },
  { keyTrigger: 'C', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', displayText: 'Closed HH' }
];

const DrumMachine = () => {
  const [displayText, setDisplayText] = useState('');

  const handleDisplayText = (text) => {
    setDisplayText(text);
  };

  return (
    <div id="drum-machine">
      <div id="display">{displayText}</div>
      <div className="drum-pads">
        {drumPadsData.map((pad) => (
          <DrumPad key={pad.keyTrigger} {...pad} onClick={handleDisplayText} />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
