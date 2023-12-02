import React from 'react';
import { Game } from '../types/Game';

interface GameItemProps {
  game: Game;
}
//hoe dat 1 game item er uit ziet, kan image enzo aan toegevoegd worden
const GameItem: React.FC<GameItemProps> = ({ game }) => {
  return (
    <div>
      <h3>{game.name}</h3>
      <p>{game.description}</p>
    </div>
  );
};

export default GameItem;
