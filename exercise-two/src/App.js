import { createContext, memo, useContext, useState, useCallback } from 'react';
import './App.css';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);

  return (
    <MyContext.Provider value={{ a, setA, b, setB }}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  return useContext(MyContext);
};

const ComponentA = () => {
  const { a } = useMyContext();
  console.log('rerender A');

  return (
    <div style={{ width: '300px', height: '300px' }}>
      Component A, value {a}
    </div>
  );
};

const ComponentB = () => {
  const { b } = useMyContext();
  console.log('rerender B');
  return (
    <div style={{ width: '300px', height: '300px' }}>
      Component B, value {b}
    </div>
  );
};

const ButtonA = () => {
  const { setA } = useMyContext();

  const randomize = useCallback(
    () => setA(Math.floor(Math.random() * 100)),
    [setA]
  );

  return <button onClick={randomize}>Change A</button>;
};

const ButtonB = () => {
  const { setB } = useMyContext();

  const randomize = useCallback(
    () => setB(Math.floor(Math.random() * 100)),
    [setB]
  );

  return <button onClick={randomize}>Change B</button>;
};

const ButtonRandom = () => {
  const { setA, setB } = useMyContext();

  const randomize = useCallback(() => {
    setA(Math.floor(Math.random() * 100));
    setB(Math.floor(Math.random() * 100));
  }, [setA, setB]);

  return <button onClick={randomize}>Change both</button>;
};

function App() {
  return (
    <MyContextProvider>
      <ComponentA />
      <ComponentB />
      <ButtonRandom />
      <ButtonA />
      <ButtonB />
    </MyContextProvider>
  );
}

export default App;
