import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
 const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
const [confirmpassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username,lastname, email, password };
        console.log("Welcome", newUser);
        if(password===confirmpassword){
            console.log("Matched");
        }else{
            console.log("Not Matched");
        }
    };
    
    return(
    <>
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } />
            </div>
             <div>
                <label>Lastname: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
             <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>

<div>
<label>First Name</label><label>{username}</label><br/>
<label>Last Name</label><label>{lastname}</label><br/>
<label>Email</label><label>{email}</label><br/>
<label>Password</label><label>{password}</label><br/>
<label>Confirm Password</label><label>{confirmpassword}</label><br/>
    
</div>
</>
    );
};
    
export default UserForm;
