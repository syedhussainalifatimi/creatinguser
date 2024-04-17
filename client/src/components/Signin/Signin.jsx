import React from 'react';
import axios from 'axios';
import Styles from './Signin.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUsers } from '../../redux/user-reducer/userSlice'; // Make sure the import path is correct
import { setUser } from '../../redux/user-reducer/currentuserSlice';



export default function Signin() {
  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [currentUserPassword, setCurrentUserPassword] = useState('');


  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
      .then(response => dispatch(setUsers(response.data))) // Use setUsers to handle array of users
      .catch(err => console.log(err));
  }, [dispatch]); // Include dispatch in the dependency array

  const users = useSelector(state => state.usersInfo.usersInfo); // Ensure this path matches your state structure


  // signin functionality 

  const handleSubmit = (e) => {
    e.preventDefault();
    // find the needed user through the array of users object
    const user = users.find(user => user.email === currentUserEmail && user.password === currentUserPassword)

    if (user) {
      console.log("User with this email exists. Signing in...");
      console.log(user.name, currentUserEmail, currentUserPassword)
      dispatch(setUser([{
        name: user.name,  // directly use user.name here
        email: currentUserEmail,
        password: currentUserPassword,
        signIn: true
      }]));
      Navigate('/')
    } else {
      alert("Incorrect email or Password");
    }
  }


  return (
    <div className={Styles.signupdiv}>
      <h2>Sign In With Email & Password</h2>

      <div className={Styles.formdiv}>

        <form onSubmit={handleSubmit}>
          <input
            type="email" value={currentUserEmail}
            onChange={(e) => { setCurrentUserEmail(e.target.value) }}
            placeholder='email'
            className={Styles.inputfield} />

          <input
            type="password"
            value={currentUserPassword}
            onChange={(e) => { setCurrentUserPassword(e.target.value) }}
            placeholder='password'
            className={Styles.inputfield}
          />


          <button type='submit' className={Styles.btn}>Sign In</button>
          <button className={Styles.btngoogle}>Sign In With Google</button>

        </form>

        <Link to='/signup'>Don't Have Account.....!</Link>

      </div>



    </div>
  );
}
