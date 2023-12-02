import React from 'react';
import { Game } from '../types/Game';
import GameItem from './GameItem';

interface GameListProps {
  onEdit: (game: Game) => void;
  games: Game[];
  onDelete: (gameId: number) => Promise<void>;
  status: string;
}
//lijst van games based on status met een gelinkte edit en delete knop
const GameList: React.FC<GameListProps> = ({ onEdit, games, onDelete, status }) => {
  return (
    <div>
      <h2>{status} Games</h2>
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
