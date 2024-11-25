import React from 'react'
import { recipt } from '../../types/recipt'

export default function FieldInRecipt(history:recipt) {
  return (
    <div>
        <h2>product code: {history.idproduct}</h2>
        <h3>price: {history.price as any}</h3>
        <h3>quantity: {history.quantity as any}</h3>
    </div>
  )
}
