"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "../../../schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { CardWrapper } from "./card-wrapper";
import { Button } from "../ui/button";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
  };
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="アカウントをお持ちですか？"
      backButtonHref="/auth/register"
      showSocial>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="メールアドレスを入力してください"
                    type="email"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="********" type="password" />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            ログイン
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
