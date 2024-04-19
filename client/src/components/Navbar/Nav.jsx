import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import Styles from './Nav.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/user-reducer/currentuserSlice';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';



export default function Nav() {
  const Navigate = useNavigate();

  const user = useSelector(state => state.user.user); // Ensure this path matches your state structure

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setUser([{
      name: '',  // directly use user.name here
      email: '',
      password: '',
      signIn: false
    }]));
    auth.signOut();
  }

  const toHome = () => {
    Navigate('/')
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.imgdiv}>
        <img src={logo} alt="logo" onClick={toHome} />
      </div>

      <div className={Styles.linkdiv}>

        <Link to='/'>Home</Link>

        <Link to='products'>Products</Link>

        <div className={Styles.cartdiv}>

          <Link to='cart'>Cart</Link>

          <div className={Styles.cartcounter}>
            <p>0</p>
          </div>

        </div>

        {user.map((user, index) => (
          user.signIn ?
            <div>
              <p className={Styles.username}>{user.name.toUpperCase()}</p>
              <p key={index} onClick={() => handleClick(user.id)} className={Styles.btn}>Sign Out</p>
            </div>
            :
            <div key={index} className={Styles.signindiv}>
              <Link to='/signin'>SignIn</Link>
            </div>
        ))}
      </div>
    </div>
  )
}
