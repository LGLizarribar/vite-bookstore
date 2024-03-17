import { useCart } from "../hooks";
import { Book } from "../models";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";

const truncate = (desc: string) => {
  if (desc?.length > 50) {
    return (desc = desc.substring(0, 49) + "...");
  } else return desc;
};

export const Books = ({ books }: { books: Array<Book> }) => {
  const hasBooks = books?.length > 0;

  // @ts-ignore
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (book: Book) => {
    return cart?.some((item: Book) => item.id === book.id);
  };

  return hasBooks ? (
    <ul className="books">
      {books.map((book) => {
        const isProductInCart = checkProductInCart(book);
        return (
          <li className="book" key={book.id}>
            <h3>{book.title}</h3>
            <p>{truncate(book.description)}</p>
            <img src={book.image} alt={book.title} />
            {book?.listPrice?.amount ? (
              <p>Price: $ {book?.listPrice?.amount}</p>
            ) : (
              <p>No price available</p>
            )}
            <button
              style={{
                backgroundColor: isProductInCart ? "#ea4242e6" : "#42a8dfe6",
              }}
              onClick={() => {
                isProductInCart ? removeFromCart(book) : addToCart(book);
              }}
            >
              {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
            </button>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No books found by this search.</p>
  );
};
