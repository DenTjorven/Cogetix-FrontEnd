export interface Game {
    id: number;
    name: string;
    img: string;
    description: string;
    dateFirstPlayed?: Date;
    dateCompleted?: Date;
    status: string;
  }
  
  export const getAllGames = async (): Promise<Game[]> => {
    try {
      const response = await fetch('http://localhost:8080/api/games');
      if (!response.ok) {
        throw new Error('Failed to fetch games');
      }
  
      const data: Game[] = await response.json();
      console.log('Fetched games:', data);
      return data;
    } catch (error) {
      console.error('Error fetching games:', error);
      throw error;
    }
  };
  
  export const addGame = async (game: Game): Promise<void> => {
    try {
      const response = await fetch('http://localhost:8080/api/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(game),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add a new game');
      }
    } catch (error) {
      console.error('Error adding a new game:', error);
      throw error;
    }
  };
  
  export const updateGame = async (game: Game): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:8080/api/games/${game.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(game),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update the game');
      }
    } catch (error) {
      console.error('Error updating the game:', error);
      throw error;
    }
  };
  
  export const deleteGame = async (gameId: number): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:8080/api/games/${gameId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete the game');
      }
    } catch (error) {
      console.error('Error deleting the game:', error);
      throw error;
    }
  };
  