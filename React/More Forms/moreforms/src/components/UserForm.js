import React, { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length === 1) {
            setFirstNameError('*first name must be at least two characters');
        } else {
            setFirstNameError('');
            setFirstName(e.target.value);
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length === 1) {
            setLastNameError('*last name must be at least two characters');
        } else {
            setLastNameError('');
            setLastName(e.target.value);

        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 5) {
            setEmailError('*email must be longer than 5 characters');
        } else {
            setEmailError('');
            setEmail(e.target.value);
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 8) {
            setPasswordError('*password must be at least 8 characters');
        } else {
            setPasswordError('');
            setPassword(e.target.value);
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length > 0 && e.target.value !== password) {
            setConfirmPasswordError('*passwords must match');
        } else {
            setConfirmPasswordError('');
            setConfirmPassword(e.target.value);
        }
    }   

    return (
    <>
                    <form>
                        <div >
                        <label>First Name</label>
                            <input type="text" onChange={handleFirstName} ></input>
                      
                        </div>
                        {firstNameError ?<p >{firstNameError}</p> :''}

                        <div >
                        <label >Last Name</label>
                            <input type="text" onChange={handleLastName} ></input>
                      
                        </div>
                        {lastNameError ?<p >{lastNameError}</p> :''}

                        <div >
                        <label>Email address</label>
                            <input type="email" onChange={handleEmail} ></input>
                           
                        </div>
                        {lastNameError ?<p >{emailError}</p> :''}

                        <div>
                        <label >Password</label>
                            <input type="password" onChange={handlePassword} ></input>
                           
                        </div>
                        {passwordError ?<p >{passwordError}</p> :''}

                        <div>
                        <label >Confirm Password</label>
                            <input type="password" onChange={handleConfirmPassword} ></input>
                         
                        </div>
                        {confirmPasswordError ?<p >{confirmPasswordError}</p> :''}

                    </form>
                    <h2>Your Form Data</h2>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email address: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {confirmPassword}</p>
                    </>
    )
}

export default Form