import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductListData } from "data/dammy-data";

const TableCategories = [
  "商品番号",
  "商品名",
  "ブランド",
  "カテゴリ",
  "サイズ",
  "在庫状況",
];

const List = () => {
  return (
    <div className=" m-14">
      <Table>
        <TableHeader>
          <TableRow>
            {TableCategories.map((category) => (
              <TableHead key={category} className="w-[100px]">
                {category}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {ProductListData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="font-medium">{item.brand}</TableCell>
              <TableCell className="font-medium">{item.category}</TableCell>
              <TableCell className="font-medium">{item.size}</TableCell>
              <TableCell className="font-medium">{item.stockStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default List;
