import React, { useState } from 'react';
import Modal from 'react-modal';
import { Game } from '../types/Game';

interface GameFormProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: (game: Game) => void;
  initialData?: Game | null;
}

const GameForm: React.FC<GameFormProps> = ({ isOpen, onRequestClose, onSubmit, initialData }) => {
    const getDefaultFormData = (): Game => ({
        id: 0,
        name: '',
        img: '',
        description: '',
        dateFirstPlayed: undefined,
        dateCompleted: undefined,
        status: '',
      });

    const [formData, setFormData] = useState<Game>(initialData || getDefaultFormData());

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData(getDefaultFormData());
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div>
        <h2>{initialData ? 'Update Game' : 'Add New Game'}</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

          {/* Add more input fields for img, description, dateFirstPlayed, dateCompleted, status, etc. */}

          <button type="button" onClick={handleSubmit}>
            {initialData ? 'Update' : 'Add'}
          </button>
          <button type="button" onClick={onRequestClose}>
            Cancel
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default GameForm;
