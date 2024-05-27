import React, { useEffect } from 'react';
import Hotproducts from '../Hotproducts/Hotproducts';
import Ourproducts from '../Ourproducts/Ourproducts';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart-reducer/cartSlice';

export default function Products() {
  const dispatch = useDispatch();

  const handleCart = (product) => {
    dispatch(addItem({
      product_id: product._id,
      name: product.product,
      imageUrl: product.imgUrl,
      price: product.price,
      quantity: 1,
      amount: product.price
    }
    ))
  };

  useEffect(() => { }, [dispatch])

  return (
    <div>
      <Hotproducts handleCart={handleCart} />
      <Ourproducts handleCart={handleCart} />
    </div>
  )
}
