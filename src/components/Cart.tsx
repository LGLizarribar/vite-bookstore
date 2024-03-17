import { useCart } from "../hooks";
import "./Cart.css";

import { MouseEventHandler, useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";

const CartItem = ({
  thumbnail,
  price,
  title,
  quantity,
  addToCart,
}: {
  thumbnail: string;
  price: number;
  title: string;
  quantity: number;
  addToCart: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
};

export function Cart() {
  const cartCheckboxId = useId();
  // @ts-ignore
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input
        className="cart-checkbox"
        id={cartCheckboxId}
        type="checkbox"
        hidden
      />

      <aside className="cart">
        <ul>
          {cart?.length > 0 &&
            cart?.map((book: any) => (
              <CartItem
                key={book.id}
                addToCart={() => addToCart(book)}
                {...book}
              />
            ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
