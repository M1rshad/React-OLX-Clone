import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { app, db } from '../../firebase/config';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const auth = getAuth(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');  // Clear any previous error messages

    try {
      console.log('Creating user with email and password...');
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('UserCredential:', userCredential);
      if (!userCredential || !userCredential.user) {
        throw new Error('User creation failed');
      }
      const user = userCredential.user;
      console.log('User created:', user);

      console.log('Adding additional user information to Firestore...');
      // Add additional user information to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        username: username,
        phone: phone,
      });
      await updateProfile(user, {displayName:username})

      console.log('User information added to Firestore, navigating to login...');
      navigate('/login');
    } catch (error) {
      console.error('Error creating user and adding user info to Firestore:', error);
      if (error.code === 'auth/email-already-in-use') {
        setError('Email is already in use.');
      } else if (error.code === 'auth/network-request-failed') {
        setError('Network error. Please check your internet connection.');
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="name"
            required
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
          />
          <br />
          <br />
          <button type="submit">Signup</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Link to="/login">
          <p>Login</p>
        </Link>
      </div>
    </div>
  );
}
