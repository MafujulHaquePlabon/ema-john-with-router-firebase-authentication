import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';


const SignUp = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error,setError]=useState('');
    const navigate= useNavigate();

    const [CreateUserWithEmailAndPassword,user]= useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur=event=>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur=event=>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur=event=>{
        setConfirmPassword(event.target.value)
    }
    if(user){
        navigate("/shop");
    }
    const handleCreateUser=event=>{
      event.preventDefault();
      if(password !== confirmPassword ){
          setError("Your two passwords didn't match");
          return;
      }
      if(password.length<6){
          setError("Password must be 6 characters or longer")
      }
      CreateUserWithEmailAndPassword(email,password);
    }

    return (
        <div className="form-container">
        <div>
        <h1 className='form-title'>Sign Up</h1>
         <form onSubmit={handleCreateUser}>
         <div className="input-group">
             <label htmlFor="email">Email</label>
             <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
         </div>
         <div className="input-group">
             <label htmlFor="password">Password</label>
             <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
         </div>
         <div className="input-group">
             <label htmlFor="confirm-password">Confirm-Password</label>
             <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" required />
         </div>
         <p style={{color:'red'}}>
             {error}
         </p>
        
        <button className='form-submit' type="submit">Submit</button>
         </form>
         <p className='createAccountLinkParent'>
             Already Have An Account?<Link className='form-link' to="/Login">Login</Link>
         </p>
         <div className='orFlex'>
             <div className="OrLeftRightSide">
             </div>
             <div>
                 <p>or</p>
             </div>
             <div className="OrLeftRightSide " >
             </div>
         </div>
         <button className="btnGoogle " type="submit"> <img className="googleImg" src="https://imgs.search.brave.com/BhWxPPAj1OqjBLXobFjxUuZedP-bjuaffBY9Gf1g5IY/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly93d3cu/cG9seW10bC5jYS9j/YWxlbmRyaWVyL3Np/dGVzL2NhbGVuZHJp/ZXIuYW1pZ293MjAy/MC5wb2x5bXRsLmNh/L2ZpbGVzL2dvb2ds/ZWxvZ28uanBn" alt="" /> Continue to google</button>
        </div>
         </div>
    );
};

export default SignUp;