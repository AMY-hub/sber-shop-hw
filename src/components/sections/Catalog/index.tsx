/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from 'classnames';
import { FormEventHandler, useCallback, useEffect, useState } from 'react';
import { CardList, NoProducts, Search, SortPanel } from '../..';
import { API } from '../../../api/api';
import { usePage, usePriceFilter, useProducts, useProductsCount, useProductsToShow } from '../../../context/AppContext';
import { useDebouncedValue } from '../../../hooks/useDebouncedValue';

import s from './index.module.scss';

export const Catalog: React.FC = () => {

    const visibleProducts = useProductsToShow();
    const [_, setProducts] = useProducts();
    const [__, setProductsCount] = useProductsCount();
    const [___, setCurrentPage] = usePage();
    const [____, setPriceFilter] = usePriceFilter();
    const [searchQuery, setSearchQuery] = useState<string>('');
    const debouncedSearchQuery = useDebouncedValue(searchQuery);

    const handleSearchRequest = useCallback(() => {
            API.search(debouncedSearchQuery)
                .then((searchedProducts) => {
                    setProducts(searchedProducts);
                    setProductsCount(searchedProducts.length);
                })
                .catch(err => console.log(err));
        },[debouncedSearchQuery, setProducts, setProductsCount]);

    const onSearchSubmit: FormEventHandler<HTMLFormElement> = (e): void => {
        e.preventDefault();
        handleSearchRequest();
    };

    const onSearchInput: FormEventHandler<HTMLInputElement> = (e): void => {
        setSearchQuery((e.target as HTMLInputElement).value);
        setCurrentPage(1);
        setPriceFilter(null);
    };

    useEffect(() => {
        handleSearchRequest();
    }, [debouncedSearchQuery, handleSearchRequest]);

    return (
        <section className={cn(s.catalog)}>
            <>
                <div className={cn(s.catalog__panel)}>
                  <SortPanel />  
                  <Search 
                    className={cn(s.catalog__search)}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    onSearchSubmit={onSearchSubmit}
                    onSearchInput={onSearchInput} />
                </div>
                {visibleProducts.length === 0 ?
                    <NoProducts />
                    : <CardList />}
            </>
        </section>
    );
};