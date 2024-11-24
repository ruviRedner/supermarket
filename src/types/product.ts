import { categoryEnum } from "./enum/categoryEnum";

export interface IProduct {
    _id: string,
    name: string,
    description: string,
    price: number,
    quantity: number,
    img: string,
    category: categoryEnum,
    prevPrice: number
}
export interface IReceiptItem {
    idproduct: IProduct;  
    quantity: number;
    price: number;
  }