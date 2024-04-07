import React from "react";
import { Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "@/app/assets/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/app/assets/EyeFilledIcon";

export default function PasswordInput() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      label="Password"
      variant="bordered"
      placeholder="パスワードを入力してください"
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className=""
    />
  );
}
