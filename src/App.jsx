import React, { useState, useEffect } from 'react';
import UrunListesi from './components/UrunListesi';
import Sepet from './components/Sepet';
import './App.css';
// Sepet ikonu için kullanılan kütüphaneyi ekleyin, örneğin react-icons
import { FaShoppingCart } from 'react-icons/fa';

const App = () => {
  const [urunler, setUrunler] = useState([]);
  const [sepet, setSepet] = useState([]);
  const [sepetGoster, setSepetGoster] = useState(false); // Yeni durum değişkeni

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setUrunler(json));
  }, []);

  const sepeteEkle = urun => {
    setSepet(currentSepet => {
      const urunBulundu = currentSepet.find(item => item.id === urun.id);
      if (urunBulundu) {
        return currentSepet.map(item =>
          item.id === urun.id ? { ...item, miktar: item.miktar + 1 } : item
        );
      }
      return [...currentSepet, { ...urun, miktar: 1 }];
    });
  };

  // Sepet ikonunun tıklama işleyicisi
  const toggleSepet = () => {
    setSepetGoster(!sepetGoster);
  };

  return (
    <div>
      <header className="AppHeader">
        <h1>Online Ticarət Səhifəsi</h1>
        {/* Sepet ikonunu ekleme */}
        <FaShoppingCart onClick={toggleSepet} style={{ cursor: 'pointer' }} />
      </header>
      {sepetGoster && <Sepet sepet={sepet} />} {/* Şartlı render ile sepetin görünürlüğünü kontrol et */}
      <UrunListesi urunler={urunler} sepeteEkle={sepeteEkle} />
    </div>
  );
};

export default App;
