import React from 'react'
import CartIcon from './CartIcon.js'
import styles from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-contexte'




function HeaderCartButton(props) {
  const ctx=React.useContext(CartContext);
  const count=ctx.NumOfProducts;
  const [btnIsanimated,setbtnIsanimated]=React.useState(false)
  React.useEffect(()=>{
    setbtnIsanimated(true);
    const timer=setTimeout(() => {
  setbtnIsanimated(false);
}, 300);

return()=>{
  clearTimeout(timer);
}


  },[ctx.items]);
  return (
    <button className={`${styles['button']} ${btnIsanimated ? styles['bump']:''}`} onClick={props.onClick}>
<span  className={`${styles['icon']}`}>
    <CartIcon/>
</span>


<span>Your Cart</span>
<span  className={styles['badge']}>
    {count}
</span>

    </button>
  )
}

export default HeaderCartButton