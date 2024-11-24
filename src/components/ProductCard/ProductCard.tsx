import { useEffect, useState } from "react";
import { categoryEnum } from "../../types/enum/categoryEnum";
import "./productCard.css";
import { socket } from "../../App";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import productSlice from "../../redux/slices/productSlice";
import { IProduct } from "../../types/product";
import { fetchCart } from "../../redux/slices/cartSlice";

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
  const { _id, name, img, category, price, quantity, prevPrice, description } = prop.product;
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const [Quentity, setQuentity] = useState(0);

  useEffect(() => {
    
    const handleProductsUpdate = (data: IProduct[]) => {
      dispatch(productSlice.actions.setProduct(data));
    };

    socket.on("allProducts", handleProductsUpdate);
    
    
    socket.on("addToCartSuccess", () => {
      
      socket.emit("get-allProducts");
    });
    
    return () => {
      socket.off("allProducts", handleProductsUpdate);
      socket.off("addToCartSuccess");
    };
  }, [dispatch]);

  const addToCart = async () => {
    if (Quentity === 0) {
      alert("Quantity is required");
      return;
    }

    const data = {
      userId: user?._id,
      prodactName: name,
      quantity: Quentity,
    };

    
    socket.emit("addToCart", data);
   await dispatch(fetchCart(user?._id as string))
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
          <span style={{ fontWeight: "bold" }}>Available in Stack</span> {quantity}
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
      </div>
    </div>
  );
}