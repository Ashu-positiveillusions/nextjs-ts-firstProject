import React, { FC, MouseEventHandler } from 'react';

type ButtonComponentProps = {
  text: string;
  onClick: (text: string) => void;
};

const ButtonComponent: FC<ButtonComponentProps> = ({ text, onClick }) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    onClick(text);
  };

  return (
    <button
      className='border-2 w-52 h-10 mb-4 bg-[#138900] text-[#FFFF] text-[20px]'
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
