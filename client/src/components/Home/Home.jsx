import React from 'react';
import Styles from './Home.module.css';
import { Link, useNavigate } from 'react-router-dom';




export default function Home() {
  const Navigate = useNavigate();
  const handleClick = () => { Navigate('/products') }

  return (
    <div className={Styles.container}>
      <div className={Styles.headingdiv}>
        <h1>The Ultimate Shopping Solutions</h1>
        <Link to='/signup'>Sign Up To Avail upto 20% Discount</Link>
      </div>
      <div className={Styles.btn}>
        <button onClick={handleClick}>
          Shop Now
        </button>
      </div>

    </div>
  )
}
