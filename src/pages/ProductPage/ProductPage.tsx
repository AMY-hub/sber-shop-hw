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
    if(!params.id) {
      throw new Error('Not found');
    }

    try {
      const product = await API.getProductById(params.id);
      return { product };
    } catch (err) {
      throw new Error('Not found');
    }          
};