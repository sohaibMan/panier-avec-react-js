import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header.js';
import Meals from './components/meals/Meals.js';
import CartProivder from './store/CartProivder';




function App() {
  const [cartIsShow,secartIsShowt]=useState(false);

  const showCartHandler=()=>{
    secartIsShowt(true);
  }
  const hideCartHandler=()=>{
    secartIsShowt(false);
  }
  

  return (
    <CartProivder>
 {cartIsShow && <Cart onHide={hideCartHandler} ></Cart>}
  <Header onShow={showCartHandler}></Header>
<main>
<Meals></Meals>
</main>
    </CartProivder>
  );
}

export default App;
