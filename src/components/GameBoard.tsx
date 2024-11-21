import React from 'react';

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