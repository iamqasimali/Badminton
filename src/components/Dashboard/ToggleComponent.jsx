import React, { useState } from 'react';

const ToggleComponent = () => {
  const [selectedOption, setSelectedOption] = useState('Player');

  return (
    <div className="w-[451px] h-[56px] bg-white rounded-[32px] flex justify-between items-center">
      <div
        onClick={() => setSelectedOption('Player')}
        className={`flex-1 h-[48px] m-1 flex justify-center items-center rounded-[32px] cursor-pointer ${
          selectedOption === 'Player'
            ? 'bg-darkgreen text-white'
            : 'bg-white text-darkgreen'
        }`}
      >
        <p className="font-dm-sans text-[16px] font-[700] leading-[22.08px]">
          I'm Player
        </p>
      </div>
      <div
        onClick={() => setSelectedOption('Organizer')}
        className={`flex-1 h-[48px] m-1 flex justify-center items-center rounded-[32px] cursor-pointer ${
          selectedOption === 'Organizer'
            ? 'bg-darkgreen text-white'
            : 'bg-white text-darkgreen'
        }`}
      >
        <p className="text-[12.42px] font-dm-sans font-[700] leading-[15.76px] text-center">
          I am a tournament organizer
        </p>
      </div>
    </div>
  );
};

export default ToggleComponent;
