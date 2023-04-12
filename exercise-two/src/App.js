import { createContext, useContext, useState, useCallback } from 'react';
import './App.css';

// const MyContext = createContext();
const AContext = createContext();
const BContext = createContext();

// const MyContextProvider = ({ children }) => {
//   const [a, setA] = useState(1);
//   const [b, setB] = useState(2);

//   return (
//     <MyContext.Provider value={{ a, setA, b, setB }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

const AContextProvider = ({ children }) => {
  const [a, setA] = useState(1);
  //   const [b, setB] = useState(2);

  return <AContext.Provider value={{ a, setA }}>{children}</AContext.Provider>;
};

const BContextProvider = ({ children }) => {
  //   const [a, setA] = useState(1);
  const [b, setB] = useState(2);

  return <BContext.Provider value={{ b, setB }}>{children}</BContext.Provider>;
};

// const useMyContext = () => {
//   return useContext(MyContext);
// };
const useAContext = () => {
  return useContext(AContext);
};
const useBContext = () => {
  return useContext(BContext);
};

const ComponentA = () => {
  //   const { a } = useMyContext();
  const { a } = useAContext();
  console.log('rerender A');

  return (
    <div style={{ width: '300px', height: '300px' }}>
      Component A, value {a}
    </div>
  );
};

const ComponentB = () => {
  //   const { b } = useMyContext();
  const { b } = useBContext();
  console.log('rerender B');
  return (
    <div style={{ width: '300px', height: '300px' }}>
      Component B, value {b}
    </div>
  );
};

const ButtonA = () => {
  //   const { setA } = useMyContext();
  const { setA } = useAContext();

  const randomize = useCallback(
    () => setA(Math.floor(Math.random() * 100)),
    [setA]
  );

  return <button onClick={randomize}>Change A</button>;
};

const ButtonB = () => {
  const { setB } = useBContext();

  const randomize = useCallback(
    () => setB(Math.floor(Math.random() * 100)),
    [setB]
  );

  return <button onClick={randomize}>Change B</button>;
};

const ButtonRandom = () => {
  //   const { setA, setB } = useMyContext();
  const { setA } = useAContext();
  const { setB } = useBContext();

  const randomize = useCallback(() => {
    setA(Math.floor(Math.random() * 100));
    setB(Math.floor(Math.random() * 100));
  }, [setA, setB]);

  return <button onClick={randomize}>Change both</button>;
};

function App() {
  return (
    // <MyContextProvider>
    <AContextProvider>
      <BContextProvider>
        <ComponentA />
        <ComponentB />
        <ButtonB />
        <ButtonRandom />
        <ButtonA />
      </BContextProvider>
    </AContextProvider>
    // </MyContextProvider>
  );
}

export default App;
