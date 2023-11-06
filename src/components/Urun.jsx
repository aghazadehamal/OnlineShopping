import React from 'react';

const Urun = ({ urun, sepeteEkle }) => {
  // Use the 'urun.imageUrl' if it exists, otherwise fallback to a default
  const imageUrl = urun.image || "";

  return (
    <div className="Urun">
      <h3>{urun.name}</h3>
      <img style={{width: "200px"}} src={imageUrl} alt={urun.name} />
      <p>{urun.description}</p>
      <p>{`${urun.price} Azn`}</p>
      <button onClick={() => sepeteEkle(urun)}>Səbətə əlavə et</button>
    </div>
  );
};


export default Urun;
