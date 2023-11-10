import React, { useState, useEffect } from 'react';
import MehsulListi from './components/MehsulListi';
import Sebet from './components/Sebet';
import './App.css';

import { FaShoppingCart } from 'react-icons/fa';

const App = () => {
  const [mehsullar, setMehsullar] = useState([]);
  const [sebet, setSebet] = useState([]);
  const [sebetGoster, setSebetGoster] = useState(false);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(json => {
        const ilk55Mehsul = json.slice(0, 50); 
        setMehsullar(ilk55Mehsul);
      });
  }, []);

  const sebeteElaveEt = mehsul => {
    console.log('Ürün sebete ekleniyor:', mehsul);
    setSebet(currentSebet => {
      const mehsulBulundu = currentSebet.find(item => item.id === mehsul.id);
      if (mehsulBulundu) {
        return currentSebet.map(item =>
          item.id === mehsul.id ? { ...item, miqdar: item.miqdar + 1 } : item
        );
      }
      return [...currentSebet, { ...mehsul, miqdar: 1 }];
    });
  };

  const toggleSebet = () => {
    setSebetGoster(!sebetGoster);
  };

  return (
    <div>
      <header className="AppHeader">
        <h1>Online Ticarət Səhifəsi <i style={{ fontSize: "25px", marginLeft: "30px" }}>
          <FaShoppingCart onClick={toggleSebet} style={{ cursor: 'pointer' }} />
        </i></h1> 
      </header>
     
      {sebetGoster && <Sebet sebetItems={sebet} />}

      <MehsulListi mehsullar={mehsullar} sebeteElaveEt={sebeteElaveEt} />
    </div>
  );
};

export default App;
