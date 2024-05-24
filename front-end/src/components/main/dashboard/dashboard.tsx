import React from "react";
import { List } from "./list";
import { ProductType } from "./dammy-data";
import { TableCategories } from "./table-column";

async function getData(): Promise<ProductType[]> {
  return [
    {
      id: "ID-01",
      name: "夏用ワンピース",
      brand: "ラコステ",
      category: "ワンピース",
      size: "M",
      stockStatus: "在庫あり",
    },
  ];
}

export default async function DashboardItem() {
  const data = await getData();
  return <List columns={TableCategories} data={data} />;
}
