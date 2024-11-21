import React, { useState } from 'react';
import LetterTile from './LetterTile';

const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;

const GameBoard: React.FC = () => {
    const [board, setBoard] = useState<string[][]>(
        Array(MAX_ATTEMPTS).fill(Array(WORD_LENGTH).fill(''))
    );
    const [currentRow, setCurrentRow] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');

    const renderRow = (rowIndex: number) => {
        return board[rowIndex].map((letter, letterIndex) => (
          <LetterTile 
            key={letterIndex} 
            letter={letter} 
            state={determineTileState(rowIndex, letterIndex)}
          />
        ));
      };
}

export default GameBoard;