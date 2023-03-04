import React from 'react';
import { LoaderFunction, useLoaderData } from 'react-router-dom';
import { API } from '../../api/api';
import { ProductDetails } from '../../components';
import { Product } from '../../types/common';

interface PageData {
  product: Product;
}

export const ProductPage:React.FC = () => {

  const pageData = useLoaderData() as PageData;

  return (
     <ProductDetails product={pageData.product} />
  );
};

export const productLoader: LoaderFunction = async ({params}) => {
  try {
    if(params.id) {
      const product = await API.getProductById(params.id);
      return {product};    
    } else {
      throw new Error('Incorrect route data');
    }   
  } catch (error) {
    console.log(error);
  }
};