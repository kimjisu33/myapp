import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  const name="리액트";
  return (
    <div
      style={{
        backgroundColor:'black',
        color:'aqua',
        fontSize:'48px',
        fontWeight:'bold',
        padding:16
      }}>
      {name}
    </div>
  );
}


/*
function App(){
  return React.createElement("div",null,"Hello",React.createElement("b",null,"react"));
}
*/

export default App;
