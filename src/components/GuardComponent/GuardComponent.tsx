import React from 'react'
import { useAppSelector } from '../../redux/store'
import Forbiden from '../Forbidden/Forbidden'
import Forbidden from '../Forbidden/Forbidden'
interface Props {
    children: React.ReactNode
}
export default function GuardComponent({ children }: Props) {
    const user = useAppSelector(state => state.user.user)
  return (
    <div>{
        user ? children : <Forbidden/>
    }</div>
  )
}
