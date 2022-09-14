import React, { useReducer } from 'react'
import CartContext from './cart-contexte'

const defaultCartState = {
  items: [],
  totalAmount: 0,
  NumOfProducts:0
}

const cartReducer = (state,action) => {
if(action.type==='ADD'){
const updatedTotalAmount=state.totalAmount+action.item.price*action.item.amount
const updatedNumOfProducts=state.NumOfProducts+action.item.amount;
const existingCartItemIndex=state.items.findIndex(item=>item.id===action.item.id)
const existingCartItem=state.items[existingCartItemIndex]
let updatedItems;

if(existingCartItem){
  updatedItems=[...state.items];
  updatedItems[existingCartItemIndex]={...existingCartItem,amount:existingCartItem.amount+action.item.amount};
}
else {
  updatedItems=state.items.concat(action.item);
};

return {items:updatedItems,NumOfProducts:updatedNumOfProducts,totalAmount:updatedTotalAmount}

}

if(action.type==='REMOVE'){
  const updatedNumOfProducts=state.NumOfProducts-1;
  const existingCartItemIndex=state.items.findIndex(item=>item.id===action.id)
  const existingCartItem=state.items[existingCartItemIndex];
  const updatedTotalAmount=state.totalAmount-existingCartItem.price
let updatedItems=[...state.items];;
if(existingCartItem.amount===1){
  updatedItems.splice(existingCartItemIndex,1);
}
else {
  updatedItems[existingCartItemIndex]={...existingCartItem,amount:existingCartItem.amount-1}

}

  return {items:updatedItems,NumOfProducts:updatedNumOfProducts,totalAmount:updatedTotalAmount}

}


return defaultCartState


}




function CartProivder(props) {
 const [cartState,dispatchCartAction]=useReducer(cartReducer, defaultCartState)
 const addItemHandler = (item) => {

  dispatchCartAction({type:'ADD',item:item})
  
  }
  
  const removeItemHandler = (id) => {
  dispatchCartAction({type:'REMOVE',id:id})
  }

   

  const CartContextArr= {
    NumOfProducts:cartState.NumOfProducts,
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler,
        }


  return (
    <CartContext.Provider value={{...CartContextArr}}>
{props.children}
    </CartContext.Provider>
  )
}

export default CartProivder