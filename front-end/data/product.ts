import { ProductType } from "../src/components/main/dashboard/dammy-data";
import { db } from "../src/lib/db";

export const getProductById = async () => {
  const products = await db.product.findMany({
    where: {
      delete_at: null,
    },
  });
  // 型変換を行う
  const convertedProducts: ProductType[] = products.map((product) => ({
    id: product.id,
    productID: product.productID,
    name: product.name,
    brand: product.brand,
    category: product.category,
    size: product.size,
    stockStatus: product.stockStatus,
    deleted_at: product.delete_at,
    created_at: product.create_at,
    updated_at: product.updated_at,
  }));
  return products;
};
