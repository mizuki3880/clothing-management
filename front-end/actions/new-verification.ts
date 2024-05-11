"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "data/user";
import { getVerificationTokenByToken } from "data/verficiation-token";

export const newVerification = async (token: string) => {
  const exisitingToken = await getVerificationTokenByToken(token);

  if (!exisitingToken) {
    return { error: "トークンがありません" };
  }

  const hasExpired = new Date(exisitingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "トークンの期限が切れました" };
  }

  const exisitingUser = await getUserByEmail(exisitingToken.email);

  if (!exisitingUser) {
    return { error: "Eメールが存在しません" };
  }

  await db.user.update({
    where: { id: exisitingUser.id },
    data: {
      emailVerified: new Date(),
      email: exisitingToken.email,
    },
  });

  await db.verificationToken.delete({
    where: { id: exisitingToken.id },
  });

  return { success: "Eメール認証完了" };
};
