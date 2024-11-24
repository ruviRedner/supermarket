import React, { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchAllProducts, fetchByCategory } from '../../redux/slices/productSlice';
import { IProduct } from '../../types/product';
import ProductCard from '../ProductCard/ProductCard';
import "./productList.css"
import { useParams } from 'react-router-dom';

export default function ProductList() {
  const productList = useAppSelector((state: RootState) => state.products.data);
  const dispatch = useAppDispatch();
  const category = useParams().category;

  useEffect(() => {
    if (category) {
      dispatch(fetchByCategory(category));
      
    }
    else{
      dispatch(fetchAllProducts());

    }

  }, [category]);

  return (
    <div className='grid'>
      {productList?.length > 0 ? (
        productList.map((pro: IProduct) => <ProductCard key={pro._id} product={pro}/>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
