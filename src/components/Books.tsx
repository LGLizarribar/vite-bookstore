import { Book } from "../models";

const truncate = (desc: string) => {
  if (desc?.length > 50) {
    return (desc = desc.substring(0, 49) + "...");
  } else return desc;
};

export const Books = ({ books }: { books: Array<Book> }) => {
  const hasBooks = books?.length > 0;

  return hasBooks ? (
    <ul className="books">
      {books.map((book) => (
        <li className="book" key={book.id}>
          <h3>{book.title}</h3>
          <p>{truncate(book.description)}</p>
          <img src={book.image} alt={book.title} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No books found by this search.</p>
  );
};
