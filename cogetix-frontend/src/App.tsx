import React, { useState } from 'react';
import Modal from 'react-modal';
import Tabs from './components/Tabs';
import GameList from './components/GameList';
import GameForm from './components/GameForm';
import { Game } from './types/Game';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('toPlay');
  const [isAddFormOpen, setAddFormOpen] = useState<boolean>(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const handleAddGame = (game: Game) => {
    // Implement logic to add a new game
    setAddFormOpen(false);
  };

  const handleUpdateGame = (game: Game) => {
    // Implement logic to update an existing game
    setSelectedGame(null);
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

      <GameList status={activeTab} onEdit={handleEditGame} />

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
