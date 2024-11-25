import React from 'react'
import { recipt } from '../../types/recipt'
import './FieldInRecipt.css'
interface props{
    historyItem:recipt
}

export default function FieldInRecipt({historyItem}:props) {
  console.log(historyItem);
  
  return (
    <div className='receipt-items'>
      <div className='receipt-date'>

        <h2>date: {historyItem.date.toString()}</h2>
        </div>
        <div className='receipt-total'>
        <h2>TotalPrice : {historyItem.totalPrice}$</h2>
        </div>
    </div>
  )
}
