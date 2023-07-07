import './App.css';
import React, {useState} from 'react';
import AddColor from './components/AddColor';
import Boxes from './components/Boxes';

function App() {

  const [boxColors, setBoxColor] = useState([]);

  const setColor = ( color ) => {
    setBoxColor([...boxColors,color]);
  }

  return (
    <>
      <AddColor newColor={ setColor } />
      <Boxes colors={ boxColors } />
    </>
  );
}

export default App;
