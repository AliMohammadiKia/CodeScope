import { useState } from "react";
import { Input, Button, Link } from "@nextui-org/react";

import { EyeFilledIcon } from "../../assets/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../assets/icons/EyeSlashFilledIcon";

export const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form className="flex flex-col gap-4">
      <Input
        type="email"
        variant="bordered"
        radius="sm"
        isRequired
        label="نام کاربری / ایمیل"
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
        ورود
      </Button>

      <div className="mt-5 flex flex-col gap-y-2">
        <Link href="#" color="primary" className="text-sm">
          رمز عبور خود را فراموش کرده ام!
        </Link>
        <p className="text-sm">
          عضو کد اسکوپ نیستم!{" "}
          <Link
            href="#"
            color="primary"
            size="sm"
            className="text-sm"
            onPress={() => setSelected("sign-up")}
          >
            ثبت نام
          </Link>
        </p>
      </div>
    </form>
  );
};
