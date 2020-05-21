import { Subjects } from './subjects';

export interface ProductUpdatedEvent {
  subject: Subjects.ProductUpdated;
  data: {
    id: string;
    title: string;
    description: string;
    price: number;
    version: number;
    userId: string;
    orderId?: string;
  };
}
