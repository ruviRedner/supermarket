import { categoryEnum } from "./enum/categoryEnum";

export interface IProduct {
    _id: string,
    name: string,
    description: string,
    price: number,
    quantity: number,
    image: string,
    category: categoryEnum,
    prevPrice: number
}