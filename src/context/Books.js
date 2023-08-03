import { createContext, useState } from "react";
const BooksContext = createContext();

function Provider({ children }) {
  const [count, setCount] = useState(5);

  const valueToShare = {
    count,
    incrementCounter: () => {
      setCount(count + 1);
    },
    setCountToZero: () => {
      setCount(0);
    },
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
