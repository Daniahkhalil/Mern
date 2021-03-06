import React, { useState } from 'react'
import axios from 'axios';
export default (props) => {
    //keep track of what is being typed via useState hook
    const { initialTitle, initialPrice, initialDescription,onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price,description});
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title :</label><br/>
                <input type="text" value={title}
                onChange={(e)=>setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price :</label><br/>
                <input type="number" value={price}
                onChange={(e)=>setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description :</label><br/>
                <input type="text"value={description}
                 onChange={(e)=>setDescription(e.target.value)} />
            </p>
            <input type="submit"/>
        </form>
    )
}

