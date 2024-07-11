import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Products from './features/products/Products';
import Cart from './features/cart/Cart';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Shopping Cart</h1>
        <Products />
        
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
