import { string } from "zod";

export type ProductType = {
  id: string;
  name: string;
  brand: string;
  category: string;
  size: string;
  stockStatus: string;
};

export const ProductListData: ProductType[] = [
  {
    id: "INV001",
    name: "商品名例1",
    brand: "ブランド例1",
    category: "カテゴリ例1",
    size: "M",
    stockStatus: "在庫あり",
  },
  {
    id: "INV002",
    name: "商品名例2",
    brand: "ブランド例2",
    category: "カテゴリ例2",
    size: "L",
    stockStatus: "在庫なし",
  },
  {
    id: "INV003",
    name: "商品名例3",
    brand: "ブランド例3",
    category: "カテゴリ例3",
    size: "L",
    stockStatus: "在庫なし",
  },
  {
    id: "INV004",
    name: "商品名例4",
    brand: "ブランド例4",
    category: "カテゴリ例4",
    size: "L",
    stockStatus: "在庫なし",
  },
  {
    id: "INV005",
    name: "商品名例5",
    brand: "ブランド例5",
    category: "カテゴリ例5",
    size: "L",
    stockStatus: "在庫なし",
  },
];
