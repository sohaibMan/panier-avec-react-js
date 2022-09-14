import React from 'react'
import Mealimg from '../../assests/meals.jpg'
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton.js'


function Header(props) {
  return (
    <>
        <header className={styles.header}>
            <h1>
Meals
            </h1>

        <HeaderCartButton  onClick={props.onShow}>
           <a href="/">Home</a> 
        </HeaderCartButton>
        </header>
      
        <div className={styles['main-image']}>
        <img src={Mealimg} alt='  a delicous meal ' />
        
        </div>        
    </>
  )
}

export default Header