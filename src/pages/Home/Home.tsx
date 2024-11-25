import React, { useEffect } from 'react'
import SearchInput from '../../components/SearchInput/SearchInput'
import CategoryList from '../../components/CategoryList/CategoryList'
import ProductList from '../../components/ProductList/ProductList'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import cartSlice from '../../redux/slices/cartSlice';
import { socket } from '../../App';
import { ICart } from '../../types/cart';

export default function Home() {
  const dispatch = useAppDispatch();
  const user_id = useAppSelector((state: RootState) => state.user.user?._id);
  useEffect(() => {
    const handleCartUpdated = (updatedCart: ICart) => {
      console.log('Cart Data:', updatedCart)
      dispatch(cartSlice.actions.setCart(updatedCart));
    };
    if (user_id) {
      
      socket.emit("getCart",user_id)
    }
    socket.on("cartUpdated", handleCartUpdated);
    // return () => {
    //   socket.off("cartUpdated", handleCartUpdated)
    // }
  }, [ user_id]);
  return (
    <div className='home-container'>
      <SearchInput />
      <CategoryList />
      <ProductList/>
    </div>
  )
}
