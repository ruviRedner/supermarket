import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./MyCart.css";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import cartSlice, { fetchCart } from "../../redux/slices/cartSlice";
import { Trash2, Plus, Minus } from "lucide-react";
import { socket } from "../../App";
import { IProduct } from "../../types/product";
import productSlice from "../../redux/slices/productSlice";
import { ICart } from "../../types/cart";

export default function MyCart() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user.user);
  const cartData = useSelector((state: RootState) => state.cart.data);
  const error = useSelector((state: RootState) => state.cart.error);

  useEffect(() => {
    const handleCartUpdated = (updatedCart: ICart) => {
      dispatch(cartSlice.actions.setCart(updatedCart));
    };

    const handleAllProducts = (updatedProducts: IProduct[]) => {
      dispatch(productSlice.actions.setProduct(updatedProducts));
    };

    if (user._id) {
      socket.emit("getCart", user._id);
    }

    socket.on("cartUpdated", handleCartUpdated);
    socket.on("allProducts", handleAllProducts);

    return () => {
      socket.off("cartUpdated", handleCartUpdated);
      socket.off("allProducts", handleAllProducts);
    };
  }, [dispatch, user._id]);

  const handleIncreaseQuantity = (ProductName: string, Quantity: number) => {
    if (Quantity === 0) {
      alert("Quantity is required");
      return;
    }

    socket.emit("addToCart", {
      userId: user?._id,
      prodactName: ProductName,
      quantity: Quantity,
      toggelQuantity: true
    });
  };

  const handleDecreaseQuantity = (ProductName: string) => {
    socket.emit("decQuantity", {
      userId: user?._id,
      productName: ProductName,
    });
  };

  const handleRemoveItem = (ProductName: string) => {
    console.log(ProductName);

    socket.emit("removeItem", {
      userId: user?._id,
      productName: ProductName,
    });
  };

  const handleClearCart = (id: string) => {
    socket.emit("clearAllCart", id);
  };

  if (error) return <div>error: {error}</div>;
  if (!cartData) return <div>No information</div>;

  return (
    <div className="my-cart">
      <div className="cart-header">
        <h2>My cart</h2>
        {cartData.receipt.length > 0 && (
          <button
            onClick={() => handleClearCart(cartData._id)}
            className="clear-cart-btn"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Clear Cart
          </button>
        )}
      </div>

      <div className="cart-container">
        {cartData.receipt.length > 0 ? (
          cartData.receipt.map((item, index) => (
            <div className="cart-card" key={`${item.idproduct._id}${index}`}>
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
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          handleDecreaseQuantity(item.idproduct.name)
                        }
                        className="quantity-btn"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleIncreaseQuantity(
                            item.idproduct.name,
                            item.quantity
                          )
                        }
                        className="quantity-btn"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p>Total: ${item.price * item.quantity}</p>
                  </div>

                  <button
                    onClick={() => handleRemoveItem(item.idproduct.name)}
                    className="remove-item-btn"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Cart is empty</p>
        )}
      </div>

      {cartData.receipt.length > 0 && (
        <div className="cart-total">
          <h3>Total payable: ${cartData.totalPrice}</h3>
          <button
            onClick={() => navigate("/checkout")}
            className="checkout-btn"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
