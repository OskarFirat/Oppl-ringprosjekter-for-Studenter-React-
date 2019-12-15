import React from 'react';
import './App.css';
// useDispatch gjør at vi kan bruke action.
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions';

function App(){

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  // Legg merke til dispatch
  const dispatch = useDispatch();

  return (
    <div>
      <h1> Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3> Viktig info</h3> : ''}
    </div>
    );
  }


export default App;
