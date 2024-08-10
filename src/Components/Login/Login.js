import React, { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { app } from '../../firebase/config';
import Logo from '../../olx-logo.png';
import './Login.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const auth = getAuth(app);
  
  const handleSubmit  = async (e) =>{
    e.preventDefault();
    setError(''); 

    try{
      console.log('Logging in user');
      const userCredential = signInWithEmailAndPassword(auth, email, password);
      console.log('user credential : ', userCredential);
      const user = (await userCredential).user
      console.log('Logged in user : ', user);

      navigate('/')
    }catch (error) {
      console.error('Error logging in user:', error);
      if (error.code === 'auth/wrong-password') {
        setError('Incorrect password.');
      } else if (error.code === 'auth/user-not-found') {
        setError('User not found.');
      } else {
        setError(error.message);
      }
    }

  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}> 
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            defaultValue="John"
            onChange={(e)=>setEmail(e.target.value)}

          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            defaultValue="Doe"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type='submit'>Login</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Link to={'/signup'}><a>Signup</a></Link>
      </div>
    </div>
  );
}

export default Login;
