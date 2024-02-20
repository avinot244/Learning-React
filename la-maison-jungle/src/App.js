import React from 'react';
import './styles/App.css';
import Banner from './Components/Banner'
import Cart from "./Components/Cart"

function App() {
  return (
    <React.StrictMode>
      <Banner />
      <Cart />
    </React.StrictMode>
  );
}

export default App;
