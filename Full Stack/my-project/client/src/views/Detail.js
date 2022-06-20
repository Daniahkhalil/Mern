import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

    
const Detail = (props) => {
    const [person, setPerson] = useState({})
    const { id } = useParams();
   
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' +id)
           .then(console.log(id))
            .then(res => {
                setPerson(res.data)
                console.log(res.data)
            })
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>First Name: {person.firstName}</p>
           
            <Link to={"/people/" + person._id + "/edit"}>
            Edit
            </Link>


            <p>Last Name: {person.lastName}</p>
        </div>
    )
}
    
export default Detail;

