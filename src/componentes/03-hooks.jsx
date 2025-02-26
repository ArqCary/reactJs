// useState

import { useState } from "react";

export const Contador = ({ value }) => {
  const [contador, setContador] = useState(value);

  const click = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <h1>Contador: </h1>
      <p>{contador}</p>
      <button onClick={click}>Contar</button>
    </>
  );
};
