import React from 'react';
import logo from './logo.svg';
import Field from './components/Field/Field'
import './App.css';

const App = () => {
  return (
    <div className="app">
            <div className="title">Tetris</div>
            <Field/>
        </div>
  );
}

export default App;
