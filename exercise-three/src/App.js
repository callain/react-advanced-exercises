import { createSelector } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {
  randomizeA,
  randomizeB,
  randomizeC,
  selectA,
  selectB,
  selectC,
} from './app/valuesSlice';

const ComponentA = () => {
  const a = useSelector(selectA);

  return (
    <div style={{ width: '300px', height: '300px' }}>
      Component A, value {a}
    </div>
  );
};

const ComponentB = () => {
  const b = useSelector(selectB);
  return (
    <div style={{ width: '300px', height: '300px' }}>
      Component B, value {b}
    </div>
  );
};

const ComponentC = () => {
  const c = useSelector(selectC);
  return (
    <div style={{ width: '300px', height: '300px' }}>
      Component C, value {c}
    </div>
  );
};

const ButtonA = () => {
  const dispatch = useDispatch();

  const randomize = useCallback(() => dispatch(randomizeA()), [dispatch]);

  return <button onClick={randomize}>Change A</button>;
};

const ButtonB = () => {
  const dispatch = useDispatch();

  const randomize = useCallback(() => dispatch(randomizeB()), [dispatch]);

  return <button onClick={randomize}>Change B</button>;
};

const ButtonC = () => {
  const dispatch = useDispatch();

  const randomize = useCallback(() => dispatch(randomizeC()), [dispatch]);

  return <button onClick={randomize}>Change C</button>;
};

const ButtonRandom = () => {
  const dispatch = useDispatch();

  const randomize = useCallback(() => {
    dispatch(randomizeA());
    dispatch(randomizeB());
    dispatch(randomizeC());
  }, [dispatch]);

  return <button onClick={randomize}>Change all</button>;
};

// Don't do this at home
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

// This function simulate a selector doing a long computation
const selectTotalSlow = createSelector([selectA, selectB], (a, b) => {
  sleep(2000);
  return a + b;
});

const APlusB = () => {
  console.log('rerender total');

  const total = useSelector(selectTotalSlow);

  return <div>a + b : {total}</div>;
};

function App() {
  return (
    <>
      <ComponentA />
      <ComponentB />
      <ComponentC />
      <APlusB />
      <ButtonRandom />
      <ButtonA />
      <ButtonB />
      <ButtonC />
    </>
  );
}

export default App;
