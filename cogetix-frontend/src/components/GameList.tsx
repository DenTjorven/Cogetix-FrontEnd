import React from 'react';
import { Game } from '../types/Game';
import GameItem from './GameItem';

interface GameListProps {
  onEdit: (game: Game) => void;
  games: Game[];
  onDelete: (gameId: number) => Promise<void>;
}

const GameList: React.FC<GameListProps> = ({ onEdit, games, onDelete }) => {
  return (
    <div>
      <h2>All Games</h2>
      {games.map((game) => (
        <div key={game.id}>
          <GameItem game={game} />
          <button onClick={() => onEdit(game)}>Edit</button>
          <button onClick={() => onDelete(game.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default GameList;
