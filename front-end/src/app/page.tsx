"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
} from "@nextui-org/react";
import PasswordInput from "./components/elements/input/PasswordInput";

interface User {
  id: number;
  name: string;
}

export default function Home() {
  return (
    <>
      <div className="flex justify-center m-32">
        <Card className="w-1/3">
          <CardBody className="">
            <div>
              <p className="text-center">ログイン</p>
              <div className="px-5">
                <p className=" text-center m-5">ユーザー名</p>
                <Input
                  type="email"
                  label="Email"
                  variant="bordered"
                  placeholder="ユーザ名を入力してください"
                />
              </div>
              <div className="px-5">
                <p className=" text-center m-5">パスワード</p>
                <PasswordInput />
              </div>
              <div className="px-5 flex justify-center">
                <Button className="m-5">サインイン</Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
