import { Subjects } from './subjects';

export interface ProductCreatedEvent {
  subject: Subjects.ProductCreated;
  data: {
    id: string;
    title: string;
    description: string;
    version: number;
    price: number;
    userId: string;
  };
}
