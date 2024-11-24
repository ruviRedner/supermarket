export interface ICart {
    _id: string;
    user_id: string;
    totalPrice: number;
    receipt: [{ idproduct: string; quantity: number; price: number }];
    isPaid: boolean;
    date: Date;
}