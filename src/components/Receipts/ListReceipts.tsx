import React, { useEffect, useState } from 'react';
import { socket } from '../../App';
import { useAppSelector } from '../../redux/store';
import { recipt } from '../../types/recipt';
import FieldInRecipt from './FieldInRecipt';
import './ListReceipts.css';

export default function ListReceipts() {
    const user = useAppSelector((state) => state.user.user);
    const [historyList, setHistoryList] = useState<recipt[] | undefined>();

    useEffect(() => {
        if (!user) return;
        socket.emit('history', user);

        // Cleanup socket listener on component unmount
        const historyHandler = (data: recipt[]) => {
            setHistoryList(data);
        };

        socket.on('history', historyHandler);

        return () => {
            socket.off('history', historyHandler);
        };
    }, [user]);

    if (!historyList?.length) {
        return (
            <div className="listReceipts">
                <div className="receipt-card">
                    <p>No purchase history available.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="listReceipts">
            {historyList.map((h: recipt, index: number) => (
                <FieldInRecipt key={index} historyItem={h} />
            ))}
        </div>
    );
}