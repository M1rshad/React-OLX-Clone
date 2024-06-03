import React, { useState } from 'react';
import {createUserWithEmailAndPassword,getAuth} from "firebase/auth";
import {app} from '../../firebase/config'
import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const auth = getAuth(app);

  const handleChange = async (e) => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  // try {
  //   // create a new user with email and password
  //   const userCredential =  createUserWithEmailAndPassword(
  //     auth,
  //     email,
  //     password
  //   );

  //   // Pull out user's data from the userCredential property
  //   const user = userCredential.user;
  // } catch (err) {
  //   // Handle errors here
  //   const errorMessage = err.message;
  //   const errorCode = err.code;
  //   setError(true);

  //     switch (errorCode) {
  //       case "auth/weak-password":
  //         setErrorMessage("The password is too weak.");
  //         break;
  //       case "auth/email-already-in-use":
  //         setErrorMessage(
  //           "This email address is already in use by another account."
  //         );
  //       case "auth/invalid-email":
  //         setErrorMessage("This email address is invalid.");
  //         break;
  //       case "auth/operation-not-allowed":
  //         setErrorMessage("Email/password accounts are not enabled.");
  //         break;
  //       default:
  //         setErrorMessage(errorMessage);
  //         break;
  //     }
  // }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="username"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="phone"
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button type='submit'>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
