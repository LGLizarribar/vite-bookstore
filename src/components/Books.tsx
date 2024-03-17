import { Book } from "../models";

export const Books = ({ books }: { books: Array<Book> }) => {
  console.log(books);
  const hasBooks = books.length > 0;

  return hasBooks ? (
    <ul className="books">
      {books.map((book) => (
        <li className="book" key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <img src={book.image} alt={book.title} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No books found by this search.</p>
  );
};
