import React from 'react'
import axios from 'axios';
    
const ProductList = (props) => {
    return (
        <div>
            {props.product.map( (product, i) =>
                <div key={i}>
                    <p>Title : {product.title}</p>
                    <p>Price : {product.price}</p>
                    <p>Description : {product.description}</p>
                    </div>
                
            )}
        </div>
    )
}
    
export default ProductList;

