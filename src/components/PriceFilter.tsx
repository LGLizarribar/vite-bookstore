import { useId } from "react";

export const PriceFilter = ({
  price,
  setPrice,
}: {
  price: number;
  setPrice: (price: number) => void;
}) => {
  const minPriceFilterId = useId();

  const handleChangeMinPrice = (event: any) => {
    setPrice(event.target.value);
  };

  return (
    <div className="filter">
      <label htmlFor={minPriceFilterId}>Price from:</label>
      <input
        type="range"
        id={minPriceFilterId}
        min="0"
        max="100"
        onChange={handleChangeMinPrice}
        value={price || 0}
      />
      <span>$ {price}</span>
    </div>
  );
};
