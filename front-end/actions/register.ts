"use server";
import bcrypt from "bcryptjs";
import * as z from "zod";
import { RegisterSchema } from "../schemas";
import { db } from "lib/db";
import { getUserByEmail } from "../data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "入力が間違っています" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const exisitingUser = await getUserByEmail(email);

  if (exisitingUser) {
    return { error: "このEメールはすでに使われています" };
  }

  await db.user.create({
    data: {
      name: name,
      email,
      password: hashedPassword,
    },
  });

  //TODO: Send verification token email

  return { success: "ユーザーを作成しました" };
  
};
