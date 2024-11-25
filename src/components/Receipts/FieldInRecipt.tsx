import React from 'react'
import { recipt } from '../../types/recipt'
interface props{
    historyItem:recipt
}

export default function FieldInRecipt({historyItem}:props) {
  return (
    <div>
        <h2>product code: {historyItem.idproduct}</h2>
        <h3>price: {historyItem.price as any}</h3>
        <h3>quantity: {historyItem.quantity as any}</h3>
    </div>
  )
}
