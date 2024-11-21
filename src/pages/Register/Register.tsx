import React, { useState } from 'react'
import Login from '../Login/Login'
import "./Register.css"
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="register">
      <input placeholder='name' type="text" />
      <input placeholder='password' type="password" />
      <input type="text" />
      <button>register</button>
    </div>
  )
}
