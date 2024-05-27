import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Styles from './Cartcomponent.module.css';



export default function Cartcomponent() {
  const cartItems = useSelector(state => state.cartItems.cartItems)
  const user = useSelector(state => state.user.user)
  const shoppingAmount = cartItems.reduce((shopppingtotal, item) => {
    return shopppingtotal + (item.price * item.quantity);
  }, 0);

  const navigate = useNavigate();

  const handleNavigate = () => { navigate("/signin") };


  return (
    <div className={Styles.maincontainer}>
      {user.map((user, index) => (
        user.signIn ?
          <div>
            <div>
              <h3>Shopping Amount: Rs: {shoppingAmount.toFixed(2)} Only</h3>
              <p>*Gst is not included</p>
            </div>
            <div>
              <button onClick={() => navigate("/payment")} className={Styles.navigatebtn}>
                procede to pay .......
              </button>
            </div>
          </div>
          :
          <div>
            <button onClick={handleNavigate} className={Styles.navigatebtn}>click Here to SignIn....</button>
          </div>
      ))}
    </div>
  )
}
