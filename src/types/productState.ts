import { IProduct } from "./product";

export interface productState {
    data: IProduct[],
    status: string,
    error: any
}