import React from 'react'
import styles from './MealForm.module.css'
import Input  from '../../Input/Input'


function Mealform(props) {
  // const [isValid,setisValid]=React.useState(true);
  const amountInputRef=React.useRef()
  const submitHandler=(event)=>{
    event.preventDefault()
   const item={id:amountInputRef.current.id,price:props.price,name:props.name,description:props.description,amount:+amountInputRef.current.value}
   props.onAddToCart(item)

  }
  return (
    <form  onSubmit={submitHandler} className={styles['form']}>
      <Input ref={amountInputRef} label="Amount" input={{id:'amount_'+props.id,type:'number',min:'1',max:'5',step:'1',defaultValue:'1',}}></Input>
      <button>Add +</button>
      </form>
  )
}

export default Mealform