import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categoryEnum } from "../../types/enum/categoryEnum";
import "./productCard.css";
import { socket } from "../../App";
import { RootState, useAppSelector } from "../../redux/store";
import { IUser } from "../../types/user";

interface Props {
  product: {
    _id: string;
    name: string;
    img: string;
    category: categoryEnum;
    price: number;
    quantity: number;
    prevPrice?: number;
    description: string;
  };
}
export default function ProductCard(prop: Props) {
  const { _id, name, img, category, price, quantity, prevPrice, description } =
    prop.product;
  const user = useAppSelector((state) => state.user.user);
  const [Quentity, setQuentity] = useState(0);
  const addToCart = () => {
    if (Quentity === 0) {
      alert("Quantity is required");
      return;
    }
    const data = {
      userId: user?._id,
      prodactName: name,
      quantity: Quentity,
    };
    console.log(data);

    socket.emit("addToCart", data);
  };

  return (
    <div className="card">
      <img src={img} alt={name} />
      <div>
        <p>
          <span style={{ fontWeight: "bold" }}>Name:</span> {name}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Price:</span> ${price}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Description:</span> {description}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Available in stock:</span>{" "}
          {quantity}
        </p>
      </div>
      <div>
        <input
          type="number"
          min="0"
          max={quantity}
          onChange={(e) => setQuentity(Number(e.target.value))}
          placeholder="Quantity"
        />
        <button onClick={addToCart}>Add to cart</button>
        {/* <button>Remove from cart</button> */}
      </div>
    </div>
  );
}
