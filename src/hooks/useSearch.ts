import { useEffect, useRef, useState } from "react";

export const useSearch = () => {
  const [search, updateSearch] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("Cannot search an empty field.");
      return;
    }

    if (search.length < 3) {
      setError("Search must contain at least three characters");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
};
