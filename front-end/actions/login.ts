"use server";

import * as z from "zod";
import { LoginSchema } from "../schemas";

const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "入力が間違っています" };
  }
  return { success: "送信しました" };
  console.log(values);
};

export default login;
