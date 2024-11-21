import React, { useState } from 'react'
import Login from '../Login/Login'
import "./Register.css"
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { fetchRegister } from '../../redux/slices/userSlice';

export default function Register() {

  const { status  } = useAppSelector((state) => state.user);
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [creditCard, setCreditCard] = useState("");

  const hendelInRegister = () => {
    dispatch(fetchRegister({
      username, password,
    })
  )
    navigate("/login");
};

  return (
    <div className="register">
      <input value={username} placeholder='name' type="text" />
      <input value={password} placeholder='password' type="password" />
      <input value={creditCard} type="text" />
      <button>register</button>
    </div>
  )
}
