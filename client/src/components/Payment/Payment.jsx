import { useState } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCartItems } from '../../redux/cart-reducer/cartSlice';
import axios from 'axios';
import Styles from './Payment.module.css';

export default function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userdata = useSelector(state => state.user.user);
  const cartItems = useSelector(state => state.cartItems.cartItems);

  const shoppingAmount = cartItems.reduce((shoppingTotal, item) => {
    return shoppingTotal + (item.price * item.quantity);
  }, 0);

  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const totalamount = shoppingAmount + (0.12 * shoppingAmount);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProducts = cartItems.map(item => ({
      name: item.name,
      quantity: item.quantity
    }));
    const username = userdata.length > 0 ? userdata[0].name : 'Guest';

    axios.post('http://localhost:3001/postOrders', {
      username,
      email,
      address,
      contact,
      products: newProducts,
      totalamount
    })
      .then(result => {
        console.log('Server response:', result.data);
        setEmail('');
        setAddress('');
        setContact('');
        dispatch(setCartItems([]));
        navigate('/'); // Navigate after the successful form submission
      })
      .catch(err => {
        console.error('Error occurred:', err);
      });
  };

  return (
    <div className={Styles.maincontainer}>
      <div className={Styles.namediv}>
        {userdata.map((user, index) => (
          <h2 key={index}>User Name: {user.name.toUpperCase()}</h2>
        ))}
      </div>
      {cartItems.map((item, index) => (
        <div key={index} className={Styles.itemsdiv}>
          <p>Product Name: {item.name}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <div className={Styles.amounts}>
        <p>Gross Amount: ${shoppingAmount.toFixed(2)}</p>
        <p>Net Amount with 12% GST: ${totalamount.toFixed(2)}</p>
      </div>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <input
          className={Styles.inputfield}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          className={Styles.inputfield}
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          required
        />
        <input
          className={Styles.inputfield}
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Contact"
          required
        />
        <button type="submit" className={Styles.btn}>Order</button>
      </form>
    </div>
  );
}
