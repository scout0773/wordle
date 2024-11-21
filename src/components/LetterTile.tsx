import React from 'react';

type LetterTileProps = {
    letter: string,
    state?: 'default' | 'correct' | 'present' | 'wrong';
};

const LetterTile: React.FC<LetterTileProps> = ({
    letter,
    state = 'default'
}) => {
    const TileClasses = `
        game-tile
        w-16 h-16
        border-2
        flex items-center justify-center
        uppercase font-bold text-3xl
        transition-all duration-300
        ${state === 'correct' ? 'bg-correct text-white' : ''}
        ${state === 'present' ? 'bg-present text-white' : ''}
        ${state === 'wrong' ? 'bg-wrong text-white' : ''}
        ${state === 'default' ? 'bg-white border-gray-300' : ''}
    `;

    return (
        <div className={TileClasses}>
            {letter}
        </div>
    );
};

export default LetterTile;