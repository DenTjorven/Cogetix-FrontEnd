import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Tabs from './components/Tabs';
import GameList from './components/GameList';
import GameForm from './components/GameForm';
import { Game, getAllGames, addGame, updateGame, deleteGame } from './apiService';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [isAddFormOpen, setAddFormOpen] = useState<boolean>(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchAllGames();
  }, []);

  const fetchAllGames = async () => {
    try {
      const data = await getAllGames();
      setGames(data);
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  const handleAddGame = async (game: Game) => {
    try {
      await addGame(game);
      setAddFormOpen(false);
      setSelectedGame(null);
      fetchAllGames();
    } catch (error) {
      // Handle error
    }
  };

  const handleUpdateGame = async (game: Game) => {
    try {
      await updateGame(game);
      setSelectedGame(null);
      setAddFormOpen(false);
      fetchAllGames();
    } catch (error) {
      // Handle error
    }
  };

  const handleDeleteGame = async (gameId: number) => {
    try {
      await deleteGame(gameId);
      fetchAllGames();
    } catch (error) {
      // Handle error
    }
  };

  const handleCancelForm = () => {
    setAddFormOpen(false);
    setSelectedGame(null);
  };

  const handleEditGame = (game: Game) => {
    setSelectedGame(game);
    setAddFormOpen(true);
  };

  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <button onClick={() => setAddFormOpen(true)}>Add New Game</button>

      <GameList onEdit={handleEditGame} games={games} onDelete={handleDeleteGame} />

      <Modal
        isOpen={isAddFormOpen}
        onRequestClose={() => {
          setAddFormOpen(false);
          setSelectedGame(null);
        }}
      >
        <GameForm
          isOpen={isAddFormOpen}
          onRequestClose={() => {
            setAddFormOpen(false);
            setSelectedGame(null);
          }}
          onSubmit={selectedGame ? handleUpdateGame : handleAddGame}
          initialData={selectedGame}
        />
      </Modal>
    </div>
  );
};

export default App;
