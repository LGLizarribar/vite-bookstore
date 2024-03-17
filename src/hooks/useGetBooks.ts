import { useCallback, useState } from "react";
import { getBooks } from "../services/books.service";

export const useGetBooks = () => {
  const [searchParams, setSearchParams] = useState<string>("*");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const getBooksList = useCallback(async () => {
    try {
      getBooks(searchParams).then((res) => {
        const mappedBooks =
          res &&
          res.map((item: any) => {
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

  return { books, getBooksList, loading, error, setSearchParams };
};
