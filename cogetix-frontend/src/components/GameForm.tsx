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

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'status') {
      const today = new Date().toISOString().split('T')[0];
      setFormData({
        ...formData,
        [name]: value,
        //veel code om typescript gerust te stellen
        dateFirstPlayed: value === 'In Progress' ? new Date(today) : value === 'Not Started' ? undefined : typeof formData.dateFirstPlayed === 'string' ? new Date(formData.dateFirstPlayed) : undefined,
        dateCompleted: value === 'Completed' ? new Date(today) : value === 'Not Started' ? undefined : typeof formData.dateCompleted === 'string' ? new Date(formData.dateCompleted) : undefined,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
          <br></br>
          <label>Image URL:</label>
          <input type="text" name="img" value={formData.img} onChange={handleInputChange} />
          <br></br>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleInputChange} />
          <br></br>
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleInputChange}>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
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
