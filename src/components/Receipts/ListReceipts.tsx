import React, { useEffect, useState } from 'react'
import { socket } from '../../App'
import { useAppSelector } from '../../redux/store';

export default function ListReceipts() {
  const user = useAppSelector((state) => state.user.user);
  const [historyList, sethistoryList] = useState<>()
  useEffect(() => {
     socket.emit('history',user._id)
    },[])
  socket.on('history',()=>{

  })
  return (
    <div>

    </div>
  )
}
