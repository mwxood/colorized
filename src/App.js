import React, { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Color from './components/color/color';
import randomColor from "randomcolor";

function App() {
  const [color, setColor] = useState(['#3eed17', '#db3b6d', '#61f4b0', '#d33298']);

  const colorsHandler = () => {
       const colors = [];

        for(let i = 0; i < 4; i++) {
            let color = randomColor();
            colors.push(color)
        }

        setColor([...colors])
  }




  return (
    <div className="App full-height ">
      <Header changeColors={colorsHandler} />
      <Color colors={color}  />
    </div>
  );
}

export default App;
