import { Subjects } from './subjects';

export interface ProductDeletedEvent {
  subject: Subjects.ProductDeleted;
  data: {
    id: string;
    title: string;
    price: number;
    version: number;
    userId: string;
    orderId?: string;
  };
}
