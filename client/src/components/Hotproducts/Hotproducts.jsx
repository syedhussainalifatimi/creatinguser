import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setHotproducts } from '../../redux/hotproducts-reducer/hotproductsSlice';
//import { addItem } from '../../redux/cart-reducer/cartSlice';
import Styles from './Hotproducts.module.css';

export default function Hotproducts({ handleCart }) {

  const dispatch = useDispatch();

  // Effect to fetch hot products
  useEffect(() => {
    axios.get('http://localhost:3001/getHotproducts')
      .then(response => dispatch(setHotproducts(response.data)))
      .catch(err => console.log(err));
  }, [dispatch]);

  const hotProductsData = useSelector(state => state.hotproducts.hotproducts);

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
