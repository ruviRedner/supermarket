import React, { useEffect, useState } from 'react'
import { socket } from '../../App'
import { useAppSelector } from '../../redux/store';
import { recipt } from '../../types/recipt';

export default function ListReceipts() {
  const user = useAppSelector((state) => state.user.user);
  const [historyList, sethistoryList] = useState<recipt[] |undefined>()
  useEffect(() => {
     socket.emit('history',user._id)
    },[])
  socket.on('history',async(data:recipt[])=>{
    await sethistoryList(data)
  })
  return (
    <div>
      {historyList?.map((h)=> )}
    </div>
  )
}
