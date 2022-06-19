import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,Link } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <Link to={"/product/" + product._id + "/edit"}>
                            Edit
                    </Link>


            {/* <p>First Name: {product.title}</p>
            <p>Last Name: {product.price}</p>
            <p>Last Name: {product.description}</p> */}
        </div>
    )
}
    
export default Detail;

