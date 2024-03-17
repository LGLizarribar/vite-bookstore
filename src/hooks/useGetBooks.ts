import { useCallback, useRef, useState } from "react";
import { getBooks } from "../services";

export const useGetBooks = ({ search = "*" }: { search: string }) => {
  const [books, setBooks] = useState([]);
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

  return { books, getBooksList, loading, error };
};
