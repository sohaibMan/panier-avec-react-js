import React from 'react'
import styles from  './Modal.module.css'
import ReactDOM from 'react-dom'



const Backdrop=(props)=>{

  
(function listenToKeyBoardEvent(){
  
  document.body.addEventListener('keydown',event=>{
  
    if(event.key==='Escape'){
      props.onClick()
    }
  })
  })()


  return <div className={styles['backdrop']}  onClick={props.onClick}/>
  
}

const ModalOverlay=props=>{
  return <div className={styles['modal']}>
  
<div className={styles['content']}>{props.children}</div>
     
       </div>

}
const ProtalElment=document.getElementById('overlays');

function Modal(props) {

  return (
    <>
     {ReactDOM.createPortal(<Backdrop onClick={props.onBackdropClick}></Backdrop>,ProtalElment)}
     {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,ProtalElment)}
    </>
  )
}

export default Modal 