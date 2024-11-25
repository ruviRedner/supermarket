import React from 'react'
import { recipt } from '../../types/recipt'
import './FieldInRecipt.css'
interface props{
    historyItem:recipt
}

export default function FieldInRecipt({historyItem}:props) {
  console.log(historyItem);
  
  return (
    <div className='fieldInRecipt'>
        <h2>date: {historyItem.date.toString()}</h2>
        <h2>Price : {historyItem.totalPrice}</h2>
    </div>
  )
}
