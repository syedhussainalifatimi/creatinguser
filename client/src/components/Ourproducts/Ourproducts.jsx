import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setOurproducts } from '../../redux/ourproducts-reducer/ourproductsSlice';
import { useEffect } from 'react';
import Styles from './Ourproducts.module.css';

export default function Ourproducts({ handleCart }) {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/getOurproducts')
      .then(response => dispatch(setOurproducts(response.data)))
      .catch(err => console.log(err));
  }, [dispatch]);

  const ourProductsData = useSelector(state => state.ourproducts.ourproducts);

  return (
    <div className={Styles.maincontainer}>
      <h2>Our Products</h2>
      <div className={Styles.container}>
        {ourProductsData.map((product, index) => (
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
  )
}
