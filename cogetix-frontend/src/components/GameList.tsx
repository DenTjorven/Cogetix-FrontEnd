import React, { useEffect, useState } from 'react';
import { Game } from '../types/Game';
import GameItem from './GameItem';

interface GameListProps {
  onEdit: (game: Game) => void;
  status: string;
}

const GameList: React.FC<GameListProps> = ({ status }) => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchAllGames();
  }, []);

  const fetchAllGames = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/games`);
      if (!response.ok) {
        throw new Error('Failed to fetch games');
      }

      const data: Game[] = await response.json();
      setGames(data);
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  return (
    <div>
      <h2>{status}</h2>
      {games
        .filter((game) => game.status === status)
        .map((game) => (
          <GameItem key={game.id} game={game} />
        ))}
    </div>
  );
};

export default GameList;
