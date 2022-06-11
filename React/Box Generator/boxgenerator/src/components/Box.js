import React from 'react';
import react, { useState } from 'react';

export const Box = (props) => {
    const [newColor, setNewColor] = useState("");
    const [size, setSize] = useState(200);
    
    const submitBox =(e)=> {
      e.preventDefault();
      props.newBox({color: newColor, size: size});
      setNewColor("");
    }

  return (
      <>
 <form onSubmit={(e) => submitBox(e)}>
        <div>
            <label>Color</label>
            <input onChange={(e) => {setNewColor(e.target.value)}} type="text"/>
        </div>
      
        <button>Add</button>
    </form>
    
  

    </>
  )
}
