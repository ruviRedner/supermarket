import { IReceiptItem } from "./product";

export interface ICart {
    _id: string;
    user_id: string;
    totalPrice: number;
    receipt: IReceiptItem[];
    isPaid: boolean;
    date: Date;
}