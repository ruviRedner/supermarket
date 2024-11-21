import { ICart } from "./cart";

export interface IUser {
    _id: string;
    username: string;
    password: string;
    role: string
    carts:any[]
}