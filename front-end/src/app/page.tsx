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
import { SignIn } from "./components/elements/button/SignIn";
import DashboardPage from "./dashboard/page";

interface User {
  id: number;
  name: string;
}

export default function Home() {
  return (
    <>
      <DashboardPage />
    </>
  );
}
