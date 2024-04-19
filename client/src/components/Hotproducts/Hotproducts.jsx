import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setHotproducts } from '../../redux/hotproducts-reducer/hotproductsSlice';
import Styles from './Hotproducts.module.css';

export default function Hotproducts() {
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  // Effect to fetch hot products
  useEffect(() => {
    axios.get('http://localhost:3001/getHotproducts')
      .then(response => dispatch(setHotproducts(response.data)))
      .catch(err => console.log(err));
  }, [dispatch]);


  const hotProductsData = useSelector(state => state.hotproducts.hotproducts);

  const handleCart = (product) => {
    setCartItems(prev => {
      // Find the product in the current cart items
      const existingProductIndex = prev.findIndex(item => item.id === product._id);

      // Check if the product already exists in the cart
      if (existingProductIndex !== -1) {
        // If the product exists, increment the quantity
        return prev.map((item, index) =>
          index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      // If the product doesn't exist, add it to the cart
      return [
        ...prev,
        {
          id: product._id,
          name: product.product, // Assuming 'product.product' holds the product's name
          price: product.price,
          quantity: 1
        }
      ];
    });
  };


  useEffect(() => { console.log(cartItems) }, [cartItems])


  return (
    <div className={Styles.maincontainer}>
      <h2>New Arrival</h2>
      <div className={Styles.container}>
        {hotProductsData.map((product, index) => (
          <div key={index} className={Styles.nameimagediv}>
            <div className={Styles.nameimagediv}>
              <img src={product.imgUrl} alt={product.product} />
              <h3>{product.product}</h3>
            </div>
            <div className={Styles.pricevolumediv}>
              <p>Price: {product.price}</p>
              <p>Volume: {product.volume}ml</p>
            </div>
            <button className={Styles.btn} onClick={() => handleCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
