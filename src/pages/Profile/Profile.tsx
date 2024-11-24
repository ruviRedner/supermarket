import React, { useEffect } from "react";
import UserDetails from "../../components/UserDetails/UserDetails";
import ListReceipts from "../../components/Receipts/ListReceipts";
import { useAppSelector } from "../../redux/store";

export default function Profile() {
  const user = useAppSelector((state)=> {state.user.user})
    console.log(user);
    
    return (
        <div>
            <UserDetails />
            <ListReceipts />
        </div>
    );
}
