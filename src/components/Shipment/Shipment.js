import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user]=useAuthState(auth);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [phonenumber,setPhonenumber]=useState('');
    const [error,setError]=useState('');
 /*    const navigate= useNavigate(); */

    const handleNameBlur=event=>{
        setName(event.target.value);
    }
    const handleAddressBlur=event=>{
        setAddress(event.target.value);
    }
    const handlePhoneNumberBlur=event=>{
        setPhonenumber(event.target.value)
    }
    /* if(user){
        navigate("/shop");
    } */
    const handleCreateUser=event=>{
      event.preventDefault();
    }

    return (
        <div className="form-container">
        <div>
        <h1 className='form-title'>Shipping Information</h1>
         <form onSubmit={handleCreateUser}>
         <div className="input-group">
             <label htmlFor="name">Your Name</label>
             <input onBlur={handleNameBlur} type="text" name="name" id="" required />
         </div>
         <div className="input-group">
             <label htmlFor="email">Your Email</label>
             <input value={user?.email} readOnly type="email" name="email" id="" required />
         </div>
         <div className="input-group">
             <label htmlFor="address">Address</label>
             <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
         </div>
         <div className="input-group">
             <label htmlFor="phonenumber">Phone Number</label>
             <input onBlur={handlePhoneNumberBlur} type="text" name="phonenumber" id="" required />
         </div>
         <p style={{color:'red'}}>
             {error}
         </p>
        
        <button className='form-submit' type="submit">Add Shipping</button>
         </form>
         </div>
         </div>
    );
};

export default Shipment;