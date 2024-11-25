import React from 'react'
import { RootState, useAppSelector } from '../../redux/store'
import Forbiden from '../Forbidden/Forbidden'
import Forbidden from '../Forbidden/Forbidden'
import { dataStatus } from '../../types/redux'
interface Props {
    children: React.ReactNode
}
export default function GuardComponent({ children }: Props) {
  const state = useAppSelector((state: RootState) => state.user)
    const user = useAppSelector(state => state.user.user)
 if (user) {
  return (
    <div>{children}</div>
  )
 } 
 else if (state.status == dataStatus.LOADING) {
  return (
    <div>Loading ...</div>
  )
}else  {
  return (
    <div><Forbiden /></div>
  )
 }
}