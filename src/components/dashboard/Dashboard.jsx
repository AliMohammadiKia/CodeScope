import { NavigationBar } from "./";

export const Dashboard = () => {
  return (
    <>
      <NavigationBar />
      <div className="mt-4">
        <h2 className="text-3xl text-center text-gray-600">صفحه اصلی</h2>
        {/* <iframe
          src="https://www.online-ide.com/aTikD1zB0q"
          frameborder="0"
          className="mt-4 w-11/12 h-[600px] mx-auto"
        ></iframe> */}
        <iframe
          src="https://stackblitz.com/edit/js-dhigap?file=index.js"
          frameborder="0"
          className="mt-4 w-11/12 h-[600px] mx-auto"
        ></iframe>
      </div>
    </>
  );
};
