import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "メールアドレスを入力してください",
  }),
  password: z.string().min(1, {
    message: "パスワードを入力してください",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "メールアドレスを入力してください",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "メールアドレスを入力してください",
  }),
  password: z.string().min(1, {
    message: "最低６文字の入力が必要です",
  }),
  name: z.string().min(1, {
    message: "名前を入力してください",
  }),
});
