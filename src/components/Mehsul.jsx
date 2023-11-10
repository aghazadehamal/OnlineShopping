import React from 'react';

const Mehsul = ({ mehsul, sebeteElaveEt }) => {

  const imagesUrl = mehsul.images || "";

  return (
    <div className="mehsul">
      <h3>{mehsul.name}</h3>
      <img style={{width: "200px"}} src={imagesUrl} alt={mehsul.name} />
      <p>{mehsul.description}</p>
      <p>{`${mehsul.price} Azn`}</p>
      <button onClick={() => sebeteElaveEt(mehsul)}>Səbətə əlavə et</button>
    </div>
  );
};


export default Mehsul;
