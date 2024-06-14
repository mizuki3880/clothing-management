import { StockStatus } from '@prisma/client';

export type ProductType = {
  id: number;
  productID: string;
  name: string;
  brand: string;
  category: string;
  size: string;
  stockStatus: StockStatus;
  deleted_at: Date | null;
  created_at: Date;
  updated_at: Date;
};
