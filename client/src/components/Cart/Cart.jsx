import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increment, decrement } from '../../redux/cart-reducer/cartSlice';
import Cartcomponent from './Cartcomponent';
import Styles from './Cart.module.css';

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartItems.cartItems)

  const handleIncrement = (product) => {
    dispatch(increment({ product_id: product.product_id }));
  }
  const handleDecrement = (product) => {
    dispatch(decrement({ product_id: product.product_id }));
  }

  const handleRemove = (product) => {
    dispatch(removeItem({ product_id: product.product_id }));
  }


  return (
    <div>
      {cartItems.length < 1 ?
        <div className={Styles.maincontainer}>
          <h2>No Items in the Cart</h2>
        </div>

        : <div> <div className={Styles.maincontainer}>
          <h2>Shoping Details</h2>
          <div className={Styles.container}>
            {cartItems.map((product, index) => (
              <div key={index} className={Styles.nameimagediv}>
                <div className={Styles.nameimagediv}>
                  <img src={product.imageUrl} alt={product.name} />
                  <h3>{product.name}</h3>
                </div>
                <div className={Styles.pricevolumediv}>
                  <p>Price: {product.price}</p>
                  <button onClick={() => handleIncrement(product)} className={Styles.qntbtnadd}>+</button>
                  <p>Quantity: {product.quantity}</p>
                  <button onClick={() => handleDecrement(product)} className={Styles.qntbtnsub}>-</button>
                  <p>Total Price: {product.amount}</p>
                </div>
                <button className={Styles.btn} onClick={() => handleRemove(product)}>Remove to Cart</button>
              </div>
            ))}
          </div>
        </div>
          <div>
            <Cartcomponent />
          </div></div>}
    </div>
  )
}
