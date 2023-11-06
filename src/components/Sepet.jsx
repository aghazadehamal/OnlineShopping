import React from 'react';

// Sepet öğelerinin fiyatlarını sayısal değere dönüştürmek için bir yardımcı fonksiyon
function getNumericPrice(priceString) {
  if (typeof priceString !== 'string') {
    console.error('Price must be a string', priceString);
    return 0;
  }
  return parseFloat(priceString.replace(/[^\d.-]/g, ''));
}


// ...

function calculateTotalPrice(sepet) {
  return sepet.reduce((total, item) => {
    // price zaten bir sayı ise bu dönüşüm gerekli değil
    const numericPrice = typeof item.price === 'number' ? item.price : getNumericPrice(item.price);
    const quantity = parseInt(item.miktar, 10); // 'quantity' yerine 'miktar' kullanıldı
    
    if (isNaN(numericPrice) || isNaN(quantity)) {
      console.error('Item price or quantity is not a valid number', item);
      return total;
    }

    return total + (numericPrice * quantity);
  }, 0);
}



// Sepet bileşeninde calculateTotalPrice fonksiyonunu kullanmadan önce,
// sepet içeriğinin doğru olduğundan emin olun.


// Sepet bileşeni
const Sepet = ({ sepet }) => {
  // Toplam fiyatı hesapla
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
      {/* Toplam fiyatı burada göster */}
      <div className="SepetTotal">
        <strong>Toplam Qiymət:</strong> {totalPrice.toFixed(2)} Azn
      </div>
    </div>
  );
};

export default Sepet;
