import React from 'react'
import styles from './Input.module.css'

const Input=React.forwardRef((props,ref)=>
<div className={styles['input']}>
        <label htmlFor={props.id}>{props.label}</label>
        <input ref={ref}{...props.input}></input>
</div>
  )


export default Input