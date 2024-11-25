import React, { useEffect, useState } from 'react'
import { socket } from '../../App'
import { useAppSelector } from '../../redux/store';
import { recipt } from '../../types/recipt';
import FieldInRecipt from './FieldInRecipt';
import './ListReceipts.css'

export default function ListReceipts() {
  const user = useAppSelector((state) => state.user.user);
  const [historyList, sethistoryList] = useState<recipt[] |undefined>()
  console.log(historyList);
  
  useEffect(() => {
    if(!user) return    
    
     socket.emit('history',user)
    },[user])

  socket.on('history',async(data:recipt[])=>{
    await sethistoryList(data)
   })
  return (
    <div className='listReceipts'>
      {historyList?.map((h:recipt)=> <FieldInRecipt  historyItem={h}/>)}
    </div>
  )
}
