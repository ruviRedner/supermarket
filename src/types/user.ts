

export interface IUser {
    _id: string;
    username: string;
    password: string;
    creditCard:string
    role: string
    carts:any[] | null
}