import React, { useEffect } from "react";
import UserDetails from "../../components/UserDetails/UserDetails";
import ListReceipts from "../../components/Receipts/ListReceipts";

export default function Profile() {
    return (
        <div>
            <UserDetails />
            <ListReceipts />
        </div>
    );
}
