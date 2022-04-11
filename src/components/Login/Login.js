import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
const Login = () => {
    return (
        <div className="form-container">
        <div>
        <h1 className='form-title'>Login</h1>
         <form>
         <div className="input-group">
             <label htmlFor="email">Email</label>
             <input type="email" name="email" id="" />
         </div>
         <div className="input-group">
             <label htmlFor="password">Password</label>
             <input type="password" name="password" id="" />
         </div>
         <button className='form-submit' type="submit">Submit</button>
         </form>
         <p className='createAccountLinkParent'>
             New to Ema-John?<Link className='form-link' to="/SignUp">Create New Account</Link>
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

export default Login;