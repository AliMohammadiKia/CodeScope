import axios from "axios";
import { useState } from "react";
import { Input, Button, Link } from "@nextui-org/react";

import { EyeFilledIcon } from "../../assets/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../assets/icons/EyeSlashFilledIcon";

export const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const signUp = async () => {
    if (email && password) {
      try {
        const response = await axios.post(
          "http://codescopeweb.com/login/users/",
          { email, password }
        );
        const jwt = response.data;
        console.log(jwt);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("please enter your email and pass");
    }
  };

  return (
    <form className="flex flex-col gap-4">
      <Input
        type="email"
        variant="bordered"
        radius="sm"
        label="ایمیل"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        label="کلمه عبور"
        variant="bordered"
        radius="sm"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
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

      <Button color="primary" radius="sm" className="mt-4" onClick={signUp}>
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
