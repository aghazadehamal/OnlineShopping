import React from 'react';

function getNumericPrice(priceString) {
  if (typeof priceString !== 'string') {
    console.error('Price must be a string', priceString);
    return 0;
  }
  return parseFloat(priceString.replace(/[^\d.-]/g, ''));
}




function calculateTotalPrice(sepet) {
  return sepet.reduce((total, item) => {

    const numericPrice = typeof item.price === 'number' ? item.price : getNumericPrice(item.price);
    const quantity = parseInt(item.miktar, 10); 
    
    if (isNaN(numericPrice) || isNaN(quantity)) {
      console.error('Item price or quantity is not a valid number', item);
      return total;
    }

    return total + (numericPrice * quantity);
  }, 0);
}







const Sepet = ({ sepet }) => {

  const totalPrice = calculateTotalPrice(sepet);

  return (
    <div className="Sepet">
      <h2>Səbət </h2>
      {sepet.map((item) => (
        <div key={item.id} className="SepetItem">
          <span>{item.name} x {item.miktar}</span>
          <span> Qiymət: {item.price}</span>
        </div>
      ))}
   
      <div className="SepetTotal">
        <strong>Toplam Qiymət:</strong> {totalPrice.toFixed(2)} Azn
      </div>
    </div>
  );
};

export default Sepet;
