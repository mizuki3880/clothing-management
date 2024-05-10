"use client";

import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect } from "react";
import { CardWrapper } from "@/components/auth/card-wrapper";

const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    console.log(token);
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="認証を確認しています"
      backButtonLabel="ログインページへ戻る"
      backButtonHref="/auth/login">
      <div className="flex items-center w-full justify-center">
        <BeatLoader />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
