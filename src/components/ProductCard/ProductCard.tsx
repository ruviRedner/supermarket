import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categoryEnum } from "../../types/enum/categoryEnum";
import "./productCard.css";
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

  const navigate = useNavigate();
  const addToCart = () => {
    
  }
  // const [quentity, setQuentity] = useState(0);
  console.log(img);

  return (
    <div className="card" onClick={addToCart}>
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
        {/* <input
          type="number"
          min="0"
          max={quantity}
          onChange={(e) => setQuentity(Number(e.target.value))}
          placeholder="Quantity"
        /> */}
        {/* <button>Add to cart</button>
        <button>Remove from cart</button> */}
      </div>
    </div>
  );
}
