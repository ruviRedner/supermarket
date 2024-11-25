import React, { useEffect } from "react";
import "./UserDetails.css";
import { useAppSelector } from "../../redux/store";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

export default function UserDetails() {
    const user = useAppSelector((state) => state.user.user);


    return (
        <div className="contaner">
            <p>{user && `username: ${user.username}`}</p>
            <p>{user && `creditCard: ************${user.creditCard.slice(-3)}`}</p>
            <p>{!user && "Please log in."}</p>
            {!user && <NavLink className="navigat" to={"/login"}>login</NavLink>}
        </div>
    );
}
