import './App.css';
import React, {useState} from 'react';
import AddColor from './components/AddColor';
import Boxes from './components/Boxes';

function App() {

  const [boxes, setBoxColor] = useState([]);

  const setColor = ( color ) => {
    setBoxColor([...boxes,color]);
  }
  
  const boxStyle = {
    padding: "20px",
    gap:"20px",
    display: "flex",
    flexWrap: "wrap"
}

  return (
    <>
      <AddColor newColor={ setColor } />
    <div style={boxStyle}>
      {
        boxes.map((box, i) => {
          return (
            <Boxes color={box.color} size={box.size} id={i} />
          )
        })
      }
    </div>
    </>
  );
}

export default App;
