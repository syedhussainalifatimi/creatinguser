import React, { useEffect, useState } from 'react';
import Styles from './Signup.module.css'
import axios from 'axios';



export default function SignUp() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => { }, [name, email, password, confirmPassword])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Passwords match, proceed with sign up
      axios.post('http://localhost:3001/postUsers', { name, email, password, confirmPassword })
        .then(result => {
          console.log(result);
          setName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        })
        .catch(err => { alert('email already exist') || console.log(err) })
    } else {
      alert('Password Mismatched')
    }
  };

  return (
    <div className={Styles.signupdiv}>
      <div className={Styles.welcomediv}>
        <h3>Welcome To Family of Ultimate Shopping Solution</h3>
        <h5>We Really Cared About Our Loyal Customers</h5>
      </div>
      <div className={Styles.formdiv}>
        <h4>SignUp A New Account</h4>
        <form className={Styles.inputinfo} onSubmit={handleSubmit}>
          <input
            className={Styles.inputfield}
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
            required
          />
          <input
            className={Styles.inputfield}
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            required
          />
          <input
            className={Styles.inputfield}
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
          <input
            className={Styles.inputfield}
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm Password'
            required
          />

          <button className={Styles.btn} type='submit'>Sign Up</button>

        </form>
      </div>
    </div>
  );
}
