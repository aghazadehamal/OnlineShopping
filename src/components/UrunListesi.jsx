import React from 'react';
import Urun from './Urun';

const UrunListesi = ({ urunler, sepeteEkle }) => {
  return (
    <div className="urunlerContainer"> {/* Stil uygulamak için sınıf adını kullanın */}
      {urunler.map((urun) => (
        <Urun key={urun.id} urun={urun} sepeteEkle={sepeteEkle} />
      ))}
    </div>
  );
};

export default UrunListesi;
