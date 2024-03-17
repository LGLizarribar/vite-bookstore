const GoogleLibraryBaseUrl = import.meta.env.VITE_GOOGLE_BOOKS_BASE_URL;
const ApiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export const getBooks = async (search: string = "*") => {
  try {
    const booksListResponse: Response = await fetch(
      `${GoogleLibraryBaseUrl}?key=${ApiKey}&q=${search}`
    );
    const json = await booksListResponse.json();
    const booksList = json.items;
    return booksList;
  } catch (e) {
    throw new Error("Error searching books");
  }
};
