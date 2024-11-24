import React, { useEffect } from 'react'
import SearchInput from '../../components/SearchInput/SearchInput'
import CategoryList from '../../components/CategoryList/CategoryList'
import ProductList from '../../components/ProductList/ProductList'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchCart } from '../../redux/slices/cartSlice';

export default function Home() {
  const dispatch = useAppDispatch();
  const user_id = useAppSelector((state: RootState) => state.user.user?._id);
  useEffect(() => {
    if (user_id) {
      dispatch(fetchCart(user_id));
    }
  }, [dispatch, user_id]);
  return (
    <div className='home-container'>
      <SearchInput />
      <CategoryList />
      <ProductList/>
    </div>
  )
}
