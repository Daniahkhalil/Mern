import React from 'react';
import { Box } from './components/Box';
import react, { useState } from 'react';

function App() {
  const [boxes, setBoxes] = useState([]);

  const box=(newBox)=> {
    setBoxes([...boxes, newBox])
  }
 
  return (
    <div >
    <Box newBox={box}/>
    <div style={{display:"flex"}}>
      {
        boxes.map((box, i) => { return <div key={i} style={{ backgroundColor: box.color, width: box.size, height: box.size, marginRight: 5}}>
          </div>
        })
      }
    </div>
  </div>
  );
}

export default App;
