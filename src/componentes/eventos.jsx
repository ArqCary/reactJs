// onClick
 
export const Contador = ({ value }) => {
    const click = () => {
      value += 1;
      console.log(value);
    }
    return (
      <>
        <h1>Contador: </h1>
        <p>{value}</p>
        <button onClick={click}>Contar</button>
      </>
    );
  };
