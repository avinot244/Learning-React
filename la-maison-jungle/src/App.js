import React from 'react';
import './styles/App.css';
import Banner from './Components/Banner'
import Cart from "./Components/Cart"
import ShoppingList from './Components/ShoppingList';

function App() {
  return (
    <React.StrictMode>
      <Banner />
      {/* <Cart /> */}
      <ShoppingList />
    </React.StrictMode>
  );
}

export default App;
