"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ProductType } from "./dammy-data";
import { Button } from "../../../components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../../../components/ui/dropdown-menu";

export const TableCategories: ColumnDef<ProductType>[] = [
  {
    accessorKey: "id",
    header: "商品ID",
  },
  {
    accessorKey: "name",
    header: "商品名",
  },
  {
    accessorKey: "brand",
    header: "ブランド名",
  },
  {
    accessorKey: "category",
    header: "商品カテゴリー",
  },
  {
    accessorKey: "size",
    header: "サイズ",
  },
  {
    accessorKey: "stockStatus",
    header: "在庫状況",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}>
              商品を編集する
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>詳細情報</DropdownMenuItem>
            <DropdownMenuItem>削除</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
