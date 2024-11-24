import React, { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchAllProducts } from '../../redux/slices/productSlice';
import { IProduct } from '../../types/product';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductList() {
  const productList = useAppSelector((state: RootState) => state.products.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div>
      {productList?.length > 0 ? (
        productList.map((pro: IProduct) => <ProductCard key={pro._id} product={pro}/>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
