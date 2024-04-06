"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
} from "@nextui-org/react";

interface User {
  id: number;
  name: string;
}

export default function Home() {
  return (
    <>
      <div className="">
        <Card className=" w-auto">
          <CardBody className=" flex justify-center ">
            <div className=" flex flex-wrap justify-center ">
              <p>ログイン</p>
              <Input />
              <p>パスワード</p>
              <Input />
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
