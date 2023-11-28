export interface Game {
    id: number;
    name: string;
    img: string;
    description: string;
    dateFirstPlayed?: Date;
    dateCompleted?: Date;
    status: string;
  }