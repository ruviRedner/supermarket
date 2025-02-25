import React, { useEffect, useState } from "react";
import "./Register.css";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { fetchRegister, logout, returnStatusToIdle } from "../../redux/slices/userSlice";
import { dataStatus } from "../../types/redux";

export default function Register() {
    const { status, user, error } = useAppSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [creditCard, setCreditCard] = useState("");

    const hendelInRegister = () => {
        dispatch(
            fetchRegister({
                username,
                password,
                creditCard,
            })
        );
    };

    useEffect(() => {
        if (status === dataStatus.SUCCESS && !user  ) {
            dispatch(returnStatusToIdle());
            navigate("/login");
        }
    }, [status]);

    return (
        <div className="register">
            {status === dataStatus.FAILED ? (
                <p> Something went wrong </p>
            ) : null}
            <input
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
                value={username}
                placeholder="enter user name"
                type="text"
            />
            <input
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                value={password}
                placeholder="password"
                type="password"
            />
            <input
                onChange={(e) => {
                    setCreditCard(e.target.value);
                }}
                value={creditCard}
                placeholder="creditCard"
                type="text"
            />
            <button className="register-btn" onClick={hendelInRegister}>register</button>
        </div>
    );
}
