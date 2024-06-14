"use client";

import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { CardWrapper } from "../../components/auth/card-wrapper";
import { newVerification } from "actions/new-verification";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "../form-success";

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;
    
    if (!token) {
      setError("Missing Token");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("何か問題が発生しました");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="認証を確認しています"
      backButtonLabel="ログインページへ戻る"
      backButtonHref="/auth/login">
      <div className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
