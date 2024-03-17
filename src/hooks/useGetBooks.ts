import { useCallback, useMemo, useRef, useState } from "react";
import { getBooks } from "../services";
import { Book } from "../models";

export const useGetBooks = ({
  search = "*",
  minPrice = 0,
}: {
  search: string;
  minPrice: number;
}) => {
  const [books, setBooks] = useState<Array<Book>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const previousSearch = useRef(search);

  const getBooksList = useCallback(async ({ search }: { search: string }) => {
    if (search === previousSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      getBooks(search).then((res) => {
        const mappedBooks =
          res &&
          res.map((item: any) => {
            const { id } = item;
            const {
              title,
              description,
              previewLink,
              authors,
              infoLink,
              imageLinks,
            } = item.volumeInfo;
            const { listPrice } = item.saleInfo;
            return {
              id,
              title,
              description,
              previewLink,
              authors,
              infoLink,
              listPrice,
              image: imageLinks?.thumbnail,
            };
          });
        setBooks(mappedBooks);
      });
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const filteredBooks = useMemo(() => {
    if (!books) return;
    return minPrice
      ? books.filter((book) => book?.listPrice?.amount >= minPrice)
      : books;
  }, [books, minPrice]);

  return { filteredBooks, getBooksList, loading, error };
};
