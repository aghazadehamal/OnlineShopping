import React from "react";
import Mehsul from "./Mehsul";

const MehsulListi = ({ mehsullar, sebeteElaveEt }) => {
  return (
    <div className="mehsullarContainer">
      {mehsullar.map((mehsul) => (
        <Mehsul key={mehsul.id} mehsul={mehsul} sebeteElaveEt={sebeteElaveEt} />
      ))}
    </div>
  );
};

export default MehsulListi;
