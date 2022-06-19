import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';
    
const Main = (props) => {
    const [product, setProduct] = useState([]);
    
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
               
            })
            .catch(err => console.error(err));
    },[]);
    
    return (
        <div>
           <ProductForm/>
           <hr/>
           <ProductList product={product}/>
        </div>
    )
}
    
export default Main;
