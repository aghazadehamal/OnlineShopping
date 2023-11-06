import React, { useState, useEffect } from 'react';
import UrunListesi from './components/UrunListesi';
import Sepet from './components/Sepet';
import './App.css';

import { FaShoppingCart } from 'react-icons/fa';

const App = () => {
  const [urunler, setUrunler] = useState([]);
  const [sepet, setSepet] = useState([]);
  const [sepetGoster, setSepetGoster] = useState(false);

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


  const toggleSepet = () => {
    setSepetGoster(!sepetGoster);
  };

  return (
    <div>
      <header className="AppHeader">
        <h1>Online Ticarət Səhifəsi</h1>
        
        <FaShoppingCart onClick={toggleSepet} style={{ cursor: 'pointer' }} />
      </header>
      {sepetGoster && <Sepet sepet={sepet} />} 
      <UrunListesi urunler={urunler} sepeteEkle={sepeteEkle} />
    </div>
  );
};

export default App;
