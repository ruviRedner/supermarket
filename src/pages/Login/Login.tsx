import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {  useEffect, useState } from "react";
import { fetchLogin } from "../../redux/slices/userSlice";
import "./login.css"
import { dataStatus } from "../../types/redux";
import { administratorsEnum } from "../../types/enum/administrotorsEnum";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const { user } = useAppSelector((state) => state.user);

  
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const handelLogin = () =>{
    if((username == administratorsEnum.meir || 
      username == administratorsEnum.nettanel || 
      username == administratorsEnum.roee || 
      username == administratorsEnum.ruby) &&
      password == "4321"
    )
    navigate('/admin')
    dispatch(fetchLogin({username,password}))
  }

  useEffect(()=>{
    if(!user) return
    navigate("/")
  },[user])

  return (
    <div className="login">
      <input id="inp"
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <input id="inp"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={handelLogin}>Login</button>

      <p>
        Don't have an accunt yet?
        <Link to={"/register"}>Register</Link>
      </p>
    </div>
  );
};

export default Login;
