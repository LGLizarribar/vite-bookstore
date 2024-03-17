import { useEffect } from "react";
import { useGetBooks } from "../hooks/useGetBooks";

export const Books = () => {
  const { books, getBooksList } = useGetBooks();
  console.log(books);

  useEffect(() => {
    getBooksList();
  }, []);

  return <>Books</>;
};
