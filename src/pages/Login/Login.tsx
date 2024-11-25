import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useEffect, useState } from "react";
import { fetchLogin } from "../../redux/slices/userSlice";
import "./login.css";
import { dataStatus } from "../../types/redux";
import { administratorsEnum } from "../../types/enum/administrotorsEnum";

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { user,error, status } = useAppSelector((state) => state.user);
    const {} = useAppSelector((state) => state.user);

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const handelLogin = () => {
        if (
            (username == administratorsEnum.meir ||
                username == administratorsEnum.nettanel ||
                username == administratorsEnum.roee ||
                username == administratorsEnum.ruby) &&
            password == "4321"
        ) {
            navigate("/admin");
            dispatch(fetchLogin({ username, password }));
        } else {
            
            dispatch(fetchLogin({ username, password }));

        }
    };

    useEffect(() => {
        if (user){
        setTimeout(() => navigate("/"), 2000);}
        
    }, [user]);
    console.log(status)
    console.log(error)

    return (
        <div className="login">
            {user && <h2>Hello {user.username} your logged in successfully</h2>}
            { status === dataStatus.FAILED && <h2>{`one or more fields are incorrect${status}`}{}</h2>}
            <input
                id="inp"
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
            />
            <input
                id="inp"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
            />
            <button className="login-btn" onClick={handelLogin}>Login</button>

            <p>
                Don't have an accunt yet?
                <Link to={"/register"}>Register</Link>
            </p>
        </div>
    );
};

export default Login;
