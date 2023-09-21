import { Link } from "react-router-dom";
import { ButtonGroup, Button } from "@nextui-org/react";

export const Home = () => {
  return (
    <div className="w-full flex-col h-screen flex justify-center items-center">
      <h1 className="text-4xl text-gray-600 font-light">
        به CodeScope خوش آمدید، به زودی صفحه معرفی طراحی میشود
      </h1>
      <div className="mt-4">
        <p>فعلا میتونید از صفحات طراحی شده زیر دیدن کنید</p>
        <ButtonGroup className="mt-4 flex-row-reverse w-full">
          <Button>
            <Link to="/auth/login">احراز هویت</Link>
          </Button>
          <Button>
            <Link to="/dashboard">داشبورد</Link>
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};
