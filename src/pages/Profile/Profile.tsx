import React, { useEffect } from "react";
import UserDetails from "../../components/UserDetails/UserDetails";
import ListReceipts from "../../components/Receipts/ListReceipts";
import { useAppSelector } from "../../redux/store";

export default function Profile() {    
    return (
        <div>
            <UserDetails />
            <ListReceipts />
        </div>
    );
}
