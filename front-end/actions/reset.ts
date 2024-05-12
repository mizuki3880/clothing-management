"use server";

import * as z from "zod";
import { ResetSchema } from "../schemas";
import { getUserByEmail } from "../data/user";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "このメールアドレスは無効です！" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "メールアドレスが存在しません" };
  }

  return { success: "リセットメールを送信しました！" };
};
