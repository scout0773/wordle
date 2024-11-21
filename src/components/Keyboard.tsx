import React from 'react';

type KeyboardProps = {
  onKeyPress: (key: string) => void;
  disabledKeys?: string[];
};

const Keyboard: React.FC<KeyboardProps> = ({ 
  onKeyPress, 
  disabledKeys = [] 
}) => {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
  ];

  const renderKey = (key: string) => {
    const isDisabled = disabledKeys.includes(key);
    
    const keyClasses = `
      ${key.length > 1 ? 'px-4 py-2 text-xs' : 'w-10 h-12'}
      bg-gray-200 
      rounded-md 
      flex items-center justify-center 
      uppercase 
      font-bold 
      cursor-pointer 
      hover:bg-gray-300 
      transition-colors 
      ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
    `;

    return (
      <button 
        key={key} 
        className={keyClasses}
        onClick={() => !isDisabled && onKeyPress(key)}
        disabled={isDisabled}
      >
        {key}
      </button>
    );
  };

  return (
    <div className="keyboard space-y-2">
      {rows.map((row, index) => (
        <div 
          key={index} 
          className="flex justify-center space-x-2"
        >
          {row.map(renderKey)}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;