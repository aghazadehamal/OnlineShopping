import React from 'react';
import Urun from './Urun';

const UrunListesi = ({ urunler, sepeteEkle }) => {
  return (
    <div className="urunlerContainer"> 
      {urunler.map((urun) => (
        <Urun key={urun.id} urun={urun} sepeteEkle={sepeteEkle} />
      ))}
    </div>
  );
};

export default UrunListesi;
