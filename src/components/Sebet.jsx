import React from "react";

function getNumericPrice(priceString) {
  if (typeof priceString !== "string") {
    console.error("Price must be a string", priceString);
    return 0;
  }
  return parseFloat(priceString.replace(/[^\d.-]/g, ""));
}

function calculateTotalPrice(sebet) {
  if (!Array.isArray(sebet)) {
    console.error("The cart items should be an array", sebet);
    return 0;
  }

  return sebet.reduce((total, item) => {
    const numericPrice =
      typeof item.price === "number" ? item.price : getNumericPrice(item.price);
    const quantity = parseInt(item.miqdar, 10);

    if (isNaN(numericPrice) || isNaN(quantity)) {
      console.error("Item price or quantity is not a valid number", item);
      return total;
    }

    return total + numericPrice * quantity;
  }, 0);
}

const Sebet = ({ sebetItems = [] }) => {
  const totalPrice = calculateTotalPrice(sebetItems);

  return (
    <div className="sebet">
      <h2>Səbət</h2>
      {sebetItems.map((item) => (
        <div key={item.id} className="sebetItem">
          <span>
            {item.name} x {item.miqdar}
          </span>
          <span> Qiymət: {item.price}</span>
        </div>
      ))}

      <div className="sebetTotal">
        <strong>Toplam Qiymət:</strong> {totalPrice.toFixed(2)} Azn
      </div>
    </div>
  );
};

export default Sebet;
