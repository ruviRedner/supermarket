import React from 'react'
import { useAppSelector } from '../../redux/store'
import Forbiden from '../Forbidden/Forbidden'
import Forbidden from '../Forbidden/Forbidden'
import { administratorsEnum } from '../../types/enum/administrotorsEnum'
interface Props {
    children: React.ReactNode
}
export default function GuardAdmin({ children }: Props) {
    const user = useAppSelector(state => state.user.user)
    let flag:boolean = false
    if (user?.username == administratorsEnum.meir || user?.username == administratorsEnum.nettanel ||
        user?.username == administratorsEnum.roee || user?.username == administratorsEnum.ruby
    ) flag = true
    return (
        <div>{
            flag ? children : <Forbidden />
        }</div>
    )
}
