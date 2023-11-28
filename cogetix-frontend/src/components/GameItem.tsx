import React from 'react';
import { Game } from '../types/Game';

interface GameItemProps {
  game: Game;
}

const GameItem: React.FC<GameItemProps> = ({ game }) => {
  return (
    <div>
      <h3>{game.name}</h3>
      <p>{game.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default GameItem;
