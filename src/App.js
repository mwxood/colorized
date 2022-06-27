import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/header/header';
import Color from './components/color/color';
import randomColor from "randomcolor";

function App() {
  const [color, setColor] = useState(['#3eed17', '#db3b6d', '#61f4b0', '#d33298']);
  // const [isLocked, setLock] = useState(false);
  const ref = useRef();

  const colorsHandler = () => {
    const colors = [];

     for(let i = 0; i < 4; i++) {
         let color = randomColor();
         colors.push(color)
     }
     setColor([...colors])
}

useEffect( () => {
 
})

// const lockHandler = (data) => {
//   setLock(!isLocked);
//   ref.current = data.target;
// }

const store = [
  {
      color: [
        {
          id: 1,
          color: color[0]
        },
        {
          id: 2,
          color: color[1]
        },
        {
          id: 3,
          color: color[2]
        },
        {
          id: 4,
          color: color[3]
        }
      ]
  }
]
  

  useEffect(() => {
 
  }); 
  

  return (
    <div className="App full-height ">
      <Header changeColors={colorsHandler} />
      <Color colorsArray={store}   />
    </div>
  );
}

export default App;
