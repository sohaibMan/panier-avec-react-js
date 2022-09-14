import React, { useContext } from 'react'
import styles from './Cart.module.css'
import Modal  from '../UI/Modal'
import CartContext from '../../store/cart-contexte'
import CartItem from './CartItem'


function Cart(props) {
  const ctx=useContext(CartContext);
  const totalamount=ctx.totalAmount.toFixed(2)
  const cartItemAddHandler = (item) => {
 ctx.addItem({...item,amount:1})
}
const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id)

  }

    const CartItems=
    ( 
    <ul className={styles['cart-items']}>
      {
    
  ctx.items.length===0? <li>Nothing to order . Please order and check again!</li>:ctx.items.map(item =>
  
  <CartItem onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)} key={item.id} {...item}></CartItem>
  
  )
      }
    </ul>
    )
    
    
   
  return (
    <Modal onBackdropClick={props.onHide}>
        {CartItems}
<div className={styles['total']}>
<span >Toatal Amount</span>
<span>${totalamount}</span>
</div>
<div className={styles['actions']}>
<button className={styles['button--alt']} onClick={props.onHide}>Close</button>
{ctx.items.length!==0 && <button className={styles['button']}>Order</button>}
</div>
    </Modal>
  )
}

export default Cart