import { useParams } from "react-router-dom";
import { NavigationBar } from "../Navbar/Navbar";

import questions from "./mock/questions.json";

export const Question = () => {
  const { questionId } = useParams();
  const { questionTitle, questionDescription } = questions.filter(
    (q) => q.id == questionId
  )[0];

  return (
    <>
      <NavigationBar />
      <div className="container mx-auto my-10 px-4 sm:px-5 md:px-10 lg:px-16 xl:px-20 2xl:px-32">
        <div className="w-12/12">
          <h2 className="py-4 text-lg text-gray-900">{questionTitle}</h2>
          <p className="text-gray-900">{questionDescription}</p>
        </div>
        <div className="w-12/12">
          <textarea
            name="editor"
            id="editor"
            cols="30"
            rows="10"
            className="bg-gray-500 text-white outline-none my-5 w-full rounded-sm p-4 text-left"
            style={{ direction: "ltr" }}
          ></textarea>
        </div>
      </div>
    </>
  );
};
