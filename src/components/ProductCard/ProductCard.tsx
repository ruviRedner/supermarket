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
  const [quantitySelected, setQuantitySelected] = useState(1);

  // Load all products when the component mounts
  useEffect(() => {
    const handleProductsUpdate = (data:IProduct) => {
      dispatch(productSlice.actions.setProduct(data));
    };

    // Handle cart update
    const handleCartUpdate = async () => {
      if (user?._id) {
        await dispatch(fetchCart(user._id));
        socket.emit("get-allProducts" ,_id)
      }
    };

    socket.on("allProducts", handleProductsUpdate);
    socket.on("cartUpdated", handleCartUpdate);

    return () => {
      socket.off("allProducts", handleProductsUpdate);
      socket.off("cartUpdated", handleCartUpdate);
    };
  }, [ user?._id]);

  // Emit event to add product to cart
  const addToCart = async () => {
    if (!user?._id) {
      alert("You must be logged in to add items to the cart.");
      return;
    }
    if (quantitySelected === 0) {
      alert("Quantity is required.");
      return;
    }
    if (quantitySelected > quantity) {
      alert(`You cannot select more than ${quantity} items.`);
      return;
    }

    const data = {
      userId: user._id,
      prodactName: name,
      quantity: quantitySelected,
    };

    socket.emit("addToCart", data);
    setQuantitySelected(0)
    
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
          <span style={{ fontWeight: "bold" }}>Available in Stock:</span> {quantity}
        </p>
      </div>
      <div>
        <input className="quantity-input"
          type="number"
          min="0"
          max={quantity}
          value={quantitySelected}
          onChange={(e) => setQuantitySelected(Number(e.target.value))}
          placeholder="Quantity"
        />
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}
