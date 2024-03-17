import { ChangeEvent, useCallback } from "react";
import { Books } from "./components";
import debounce from "just-debounce-it";
import { useGetBooks, useSearch } from "./hooks";
import "./App.css";

const App = () => {
  const { search, updateSearch, error } = useSearch();
  const { books, loading, getBooksList } = useGetBooks({ search });

  const debouncedGetMovies = useCallback(
    debounce((search: string) => {
      getBooksList({ search });
    }, 300),
    [getBooksList]
  );

  const handleSubmit = (event: any) => {
    event.preventDefault();
    getBooksList({ search });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h1>Book store</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            onChange={handleChange}
            value={search}
            name="search"
            placeholder="Search for your book"
          />
          <button type="submit">Find</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>{loading ? <p>Loading...</p> : <Books books={books} />}</main>
    </div>
  );
};

export default App;
