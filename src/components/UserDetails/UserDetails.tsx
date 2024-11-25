import React from "react";
import "./UserDetails.css";
import { useAppSelector } from "../../redux/store";
import { NavLink } from "react-router-dom";

export default function UserDetails() {
    const user = useAppSelector((state) => state.user.user);
    
    return (
        <div className="contaner">
            <div className="user-info">
                {user ? (
                    <>
                        <p className="user-field">Username: {user.username}</p>
                        <p className="user-field">Credit Card: ************{user.creditCard.slice(-3)}</p>
                    </>
                ) : (
                    <>
                        <p className="user-message">Please log in.</p>
                        <NavLink className="navigat" to="/login">
                            Login
                        </NavLink>
                    </>
                )}
            </div>
        </div>
    );
}