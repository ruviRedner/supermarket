import { ICart } from "./cart";

export interface cartState {
    data: ICart | null;
    status: string;
    error: null | string;
}