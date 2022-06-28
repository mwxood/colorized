import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/header/header';
import Color from './components/color/color';
import randomColor from "randomcolor";

function App() {
  const [color, setColor] = useState(['#3eed17', '#db3b6d', '#61f4b0', '#d33298']);
  const [isLocked, setlocked] = useState(false);
  const [icon, setIcon] = useState(['icon fa-solid fa-lock-open', 'icon fa-solid fa-lock-open', 'icon fa-solid fa-lock-open', 'icon fa-solid fa-lock-open']);
  let currentEl = useRef();

  const colorsHandler = () => {
    const colors = [];

     for(let i = 0; i < 4; i++) {
         let color = randomColor();
         colors.push(color)
     }
     setColor([...colors])
}

const state = [
  {
      color: [
        {
          id: 0,
          color: color[0],
          icon: icon[0]
        },
        {
          id: 1,
          color: color[1],
          icon: icon[1]
        },
        {
          id: 2,
          color: color[2],
          icon: icon[2]
        },
        {
          id: 3,
          color: color[3],
          icon: icon[3]
        }
      ]
  }
]

const copyState = [...state];



const lockHandler = (event) => {

}
  

  

  return (
    <div className="App full-height ">
      <Header changeColors={colorsHandler} />
      <Color lock={lockHandler} colorsArray={copyState}   />
    </div>
  );
}

export default App;
