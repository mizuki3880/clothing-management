import React from "react";
import { BackButton } from "./back-button";
import { Header } from "./header";
import { Card, CardFooter, CardHeader } from "../ui/card";
import { CardWrapper } from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="何か問題が発生しました"
      backButtonHref="/auth/login"
      backButtonLabel="ログイン画面に戻ります">
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className=" text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
