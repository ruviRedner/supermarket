import React, { useRef, useState } from 'react'
import { categoryEnum } from '../../types/enum/categoryEnum'
import { Socket } from 'socket.io-client'
import './admin.css'
import { socket } from '../../App'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Admin() {
    const navigate = useNavigate()
    const [name, setname] = useState<string>()
    const [img, setimg] = useState<string>('')
    const [category, setcategory] = useState<categoryEnum>()
    const [price, setprice] = useState(0)
    const [quantity, setquantity] = useState(0)
    const [description, setdescription] = useState('')
    const handelAddProduct = async () => {
        const data = { name, img, category, price, quantity, description }
        socket.emit('newProduct', data)
        navigate('/')
    }
    return (
        <div className='admin'>
            <input
                type="text"
                placeholder="name of product"
                value={name}
                onChange={(e) => setname(e.target.value)}
            />
            <input id="inp"
                type="text"
                placeholder="image url"
                value={img}
                onChange={(e) => setimg(e.target.value)}
            />
            <p>Category</p>
            <select value={category}
                onChange={(e) => setcategory(e.target.value as categoryEnum)}>
                <option value={categoryEnum.Drink}>Drink</option>
                <option value={categoryEnum.Dry}>Dry</option>
                <option value={categoryEnum.Fish}>Fish</option>
                <option value={categoryEnum.Meat}>Meat</option>
                <option value={categoryEnum.Milk}>Milk</option>
                <option value={categoryEnum.Vegetables}>Vegetables</option>
                <option value={categoryEnum.Fruits}>Fruits</option>
            </select>
            <p>Price</p>
            <input
                type="number"
                placeholder="price"
                value={price}
                onChange={(e) => setprice(e.target.value as any)}
            /> <p>Quantity</p><input
                type="number"
                placeholder="quantity"
                value={quantity}
                onChange={(e) => setquantity(e.target.value as any)}
            /> <p>Description</p> <input id="inp"
                type="text"
                placeholder="description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
            />
            <button onClick={handelAddProduct}>Add product</button>
        </div>
    )
}

