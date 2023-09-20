import { useState } from "react";
import { Login, SignUp } from "./";

import loginImg from "../../assets/images/login.jpg";
import { Tabs, Tab } from "@nextui-org/react";

export const Auth = () => {
  const [selected, setSelected] = useState("login");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-screen">
      <div className="bg-gray-100 flex flex-col justify-center items-center">
        <div className="max-w-[400px] w-full h-[500px] bg-white px-4 py-8 shadow-sm rounded-md">
          <h2 className="text-center text-2xl font-normal mt-4 mb-8">
            CodeScope
          </h2>

          <Tabs
            fullWidth
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="ورود">
              <Login />
            </Tab>
            <Tab key="sign-up" title="ثبت نام">
              <SignUp />
            </Tab>
          </Tabs>
        </div>
      </div>

      <div className="hidden sm:block">
        <img src={loginImg} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
