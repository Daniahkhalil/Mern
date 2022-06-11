import React from 'react';
import react, { useState } from 'react';

export const Box = (props) => {
    const [newColor, setNewColor] = useState("");
  
    
    const submitBox =(e)=> {
      e.preventDefault();
      props.newBox({color: newColor, size: 200});
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
