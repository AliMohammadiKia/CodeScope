import { Link } from "react-router-dom";

import { NavigationBar } from "../";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import questions from "./mock/questions.json";

export const Exercise = () => {
  return (
    <>
      <NavigationBar />

      <div className="container mx-auto my-10 px-4 sm:px-5 md:px-10 lg:px-16 xl:px-20 2xl:px-32">
        <Table>
          <TableHeader>
            <TableColumn className="text-right">سوال</TableColumn>
            <TableColumn className="text-right">سختی</TableColumn>
            <TableColumn className="text-right">دسته بندی</TableColumn>
            <TableColumn className="text-right">acceptance</TableColumn>
            <TableColumn className="text-right">راه حل</TableColumn>
            <TableColumn className="text-right">نوع راه حل</TableColumn>
          </TableHeader>
          <TableBody>
            {questions.map(
              ({
                id,
                questionTitle,
                status,
                category,
                acceptance,
                solution,
              }) => (
                <TableRow key={id}>
                  <TableCell>
                    <Link
                      to={`/exercise/question/${id}`}
                      className="hover:text-blue-500 transition-all"
                    >
                      {questionTitle.length > 50
                        ? questionTitle.substring(0, 50) + " ..."
                        : questionTitle}
                    </Link>
                  </TableCell>
                  <TableCell
                    className={
                      status === "آسون"
                        ? "text-green-600"
                        : status === "متوسط"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }
                  >
                    {status}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-x-2">
                      {category.map((c, index) => (
                        <Link
                          key={index}
                          className="bg-blue-50 py-1 px-2 hover:text-blue-500 transition-all"
                        >
                          {c}
                        </Link>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{acceptance}</TableCell>
                  <TableCell>
                    {solution.isSolution ? "دارد" : "ندارد"}
                  </TableCell>
                  <TableCell>{solution.type}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};
