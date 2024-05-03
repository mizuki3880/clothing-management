import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Divider } from "@nextui-org/divider";

export default function DashboardPage() {
  return (
    <>
      <div className="p-20">
        <h1 className=" font-10">商品情報</h1>
        <Divider className="my-4" />
        <Table className="p-10">
          <TableHeader>
            <TableColumn>商品名</TableColumn>
            <TableColumn>サイズ</TableColumn>
            <TableColumn>出品日</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>ワンピース</TableCell>
              <TableCell>Lサイズ</TableCell>
              <TableCell>2024/05/03</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
