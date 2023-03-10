import React from 'react';
import { Catalog, Preloader } from '../../components';
import { useLoadingState } from '../../context/AppContext';

export const CatalogPage:React.FC = () => {

    const loading = useLoadingState();

  return (
      loading ?
        <Preloader />
        :
        <Catalog />
    );
};