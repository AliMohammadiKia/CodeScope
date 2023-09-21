import { useState } from "react";
import { Input, Button, Link } from "@nextui-org/react";

import { EyeFilledIcon } from "../../assets/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../assets/icons/EyeSlashFilledIcon";

export const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form className="flex flex-col gap-4">
      <Input
        type="email"
        variant="bordered"
        radius="sm"
        isRequired
        label="ایمیل"
      />
      <Input
        label="کلمه عبور"
        variant="bordered"
        radius="sm"
        isRequired
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
      />

      <Button color="primary" radius="sm" className="mt-4">
        ثبت نام
      </Button>

      <p className="mt-5 text-sm">
        عضو کد سکوپ هستی؟{" "}
        <Link size="sm" onPress={() => setSelected("login")}>
          ورود
        </Link>
      </p>
    </form>
  );
};
