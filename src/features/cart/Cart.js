import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotalQuantity, selectCartTotalAmount, addToCart, removeFromCart } from './cartSlice';

const Cart = () => {
  const items = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectCartTotalQuantity);
  const totalAmount = useSelector(selectCartTotalAmount);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.totalPrice}</p>
                <button onClick={() => dispatch(addToCart(item))}>+</button>
                <button onClick={() => dispatch(removeFromCart(item))}>-</button>
              </li>
            ))}
          </ul>
          <div>
            <p>Total Quantity: {totalQuantity}</p>
            <p>Total Amount: ${totalAmount}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
