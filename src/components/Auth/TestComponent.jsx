// TestComponent.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Adjust path if needed

const TestComponent = () => {
  const { addToCart, getCartCount, cart } = useContext(CartContext);

  const testProduct = { id: 1, title: 'Test Product', price: '10.00' };

  const handleAdd = () => {
    addToCart(testProduct);
    console.log('Test product added:', testProduct);
    console.log('Cart count after addition:', getCartCount());
    console.log('Current cart items:', cart);
  };

  return (
    <div>
      <button onClick={handleAdd}>Add Test Product</button>
      <p>Cart Count: {getCartCount()}</p>
      <p>Cart Items: {JSON.stringify(cart)}</p>
    </div>
  );
};

export default TestComponent;
