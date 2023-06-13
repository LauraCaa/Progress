import { useState } from "react";
import styles from "../styles/market.module.css"
export default function ProductAmount({price,Fcost,updatePrice}){
    const [ amount,setAmount] = useState(0)
    function UpDateAmount(type){
        if( type === '+'){
            setAmount(amount + 1)
         }else if (amount > 0){
            setAmount( amount - 1)
         }
    }
    return(
        <div className={styles.FlexAmount}>
            <button onClick={()=>UpDateAmount('-')}>-</button>
            <h1>{amount}</h1>
            <button onClick={()=>UpDateAmount('+')}>+</button>
        </div>
    )
}