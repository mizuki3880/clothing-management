import React from "react";
import { List } from "./list";
import { ProductType } from "./dammy-data";
import { TableCategories } from "./table-column";
import { getProductById } from "data/product";

export default async function DashboardItem() {
  const data = await getProductById();
  return <List columns={TableCategories} data={data} />;
}
