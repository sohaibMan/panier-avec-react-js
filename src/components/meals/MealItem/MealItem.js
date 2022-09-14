import React from 'react'
import styles from './MealItem.module.css'
import MealForm from './../MealForm/MealForm.js';
import CartContext from '../../../store/cart-contexte.js'



function MealItem(props) {
  const ctx=React.useContext(CartContext)
  const addItem=ctx.addItem;
  return (
    <li className={styles['meal']}>
    <div>
      <h3 className={styles['name']}>{props.meal.name}</h3>
    </div>
      <div>
          <p className={styles['description']}>{props.meal.description}  </p>
     </div>
      <div>
           <p className={styles['price']}>{`$${props.meal.price.toFixed(2)}`}  </p>
      </div>
      <MealForm onAddToCart={addItem} {...props.meal} ></MealForm>
  </li>
  )
}

export default MealItem