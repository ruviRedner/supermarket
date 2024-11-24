// src/components/MyCart/MyCart.tsx
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./MyCart.css";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { fetchCart } from "../../redux/slices/cartSlice";

export default function MyCart() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user_id = useAppSelector((state: RootState) => state.user.user?._id);
  const cartData = useSelector((state: RootState) => state.cart.data);
  const error = useSelector((state: RootState) => state.cart.error);

  useEffect(() => {
    if (user_id) {
      dispatch(fetchCart(user_id));
    }
  }, [dispatch, user_id]);

  if (error) return <div>error: {error}</div>;
  if (!cartData) return <div>No inpormation</div>;

  return (
    <div className="my-cart">
      <h2>My cart</h2>
      {cartData.receipt.length > 0 && (
        <div className="cart-total">
          <h3>Total payable:${cartData.totalPrice}</h3>
          <button onClick={() => navigate("/checkout")}>
            for payment and confirmation
          </button>
        </div>
      )}
      <div className="cart-container">
        {cartData.receipt.length > 0 ? (
          cartData.receipt.map((item) => (
            <div className="cart-item" key={item.idproduct._id}>
              <div className="cart-details">
                <img
                  src={item.idproduct.img}
                  alt={item.idproduct.name}
                  className="product-image"
                />

                <div className="product-info">
                  <h3>{item.idproduct.name}</h3>
                  <p>{item.idproduct.description}</p>

                  <div className="price-info">
                    <p>Price for one ${item.idproduct.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Total:${item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Cart is empty</p>
        )}
      </div>


    </div>
  );
}
