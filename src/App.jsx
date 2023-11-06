import React, { useState, useEffect } from 'react';
import UrunListesi from './components/UrunListesi';
import Sepet from './components/Sepet';
import './App.css'

const App = () => {
  const [urunler, setUrunler] = useState([]);
  const [sepet, setSepet] = useState([]);

  useEffect(() => {
    setUrunler([
      { 
        id: 1, 
        name: 'Məhsul 1', 
        description: 'Açıqlama 1', 
        price: '10.00', 
        imageUrl: 'https://m.media-amazon.com/images/I/81PtF30TLUL._AC_UY1100_.jpg' // Ürün 1 için resim URL'si
      },
      { 
        id: 2, 
        name: 'Məhsul 2', 
        description: 'Açıqlama 2', 
        price: '20.00', 
        imageUrl: 'https://shop.iwm.org.uk/images/product/Lancaster%20crew%20bag%201-1672418420.jpg' // Ürün 2 için resim URL'si
      },
      { 
        id: 1, 
        name: 'Məhsul 1', 
        description: 'Açıqlama 1', 
        price: '10.00', 
        imageUrl: 'https://m.media-amazon.com/images/I/81PtF30TLUL._AC_UY1100_.jpg' // Ürün 1 için resim URL'si
      },
      { 
        id: 2, 
        name: 'Məhsul 2', 
        description: 'Açıqlama 2', 
        price: '20.00', 
        imageUrl: 'https://shop.iwm.org.uk/images/product/Lancaster%20crew%20bag%201-1672418420.jpg' // Ürün 2 için resim URL'si
      },
      { 
        id: 1, 
        name: 'Məhsul 1', 
        description: 'Açıqlama 1', 
        price: '10.00', 
        imageUrl: 'https://m.media-amazon.com/images/I/81PtF30TLUL._AC_UY1100_.jpg' // Ürün 1 için resim URL'si
      },
      { 
        id: 2, 
        name: 'Məhsul 2', 
        description: 'Açıqlama 2', 
        price: '20.00', 
        imageUrl: 'https://shop.iwm.org.uk/images/product/Lancaster%20crew%20bag%201-1672418420.jpg' // Ürün 2 için resim URL'si
      },
      { 
        id: 1, 
        name: 'Məhsul 1', 
        description: 'Açıqlama 1', 
        price: '10.00', 
        imageUrl: 'https://m.media-amazon.com/images/I/81PtF30TLUL._AC_UY1100_.jpg' // Ürün 1 için resim URL'si
      },
      { 
        id: 2, 
        name: 'Məhsul 2', 
        description: 'Açıqlama 2', 
        price: '20.00', 
        imageUrl: 'https://shop.iwm.org.uk/images/product/Lancaster%20crew%20bag%201-1672418420.jpg' // Ürün 2 için resim URL'si
      },
      // Diğer ürünlerinizin imageUrl'lerini de benzer şekilde güncelleyebilirsiniz.
    ]);
  }, []);
  
  
  

  const sepeteEkle = urun => {
    setSepet(currentSepet => {
      const urunBulundu = currentSepet.find(item => item.id === urun.id);
      if (urunBulundu) {
        return currentSepet.map(item =>
          item.id === urun.id ? { ...item, miktar: (item.miktar || 0) + 1 } : item
        );
      }
      return [...currentSepet, { ...urun, miktar: 1 }];
    });
  };
  

  return (
    <div>
      <header className="AppHeader">
        <h1>Online Ticarət Səhifəsi</h1>
      </header>
      <UrunListesi urunler={urunler} sepeteEkle={sepeteEkle} />
      <Sepet sepet={sepet} />
    </div>
  );
};

export default App;
