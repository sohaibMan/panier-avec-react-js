import React from 'react'
import {DUMMY_MEALS} from './dummy-meals.js'
import styles from './AvailableMeals.module.css'
import Card from '../../Card';
import MealItem from './MealItem/MealItem.js';


function AvailableMeals() {
 return (
<section className={styles['meals']}>
<Card>
<ul>
{
    DUMMY_MEALS.map(meal=><MealItem key={meal.id} meal={{...meal}}></MealItem>)   
}
</ul>
</Card>
    </section>
 )
}

export default AvailableMeals

