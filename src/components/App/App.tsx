/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, FormEventHandler, useCallback } from 'react';
import { API } from '../../api/api';
import { CardList, Footer, Header, Logo, Preloader, Search, SearchInfo } from '..';
import { useDebouncedValue } from '../../hooks/useDebouncedValue';
import { useLoadingState, usePage, usePriceFilter, useProducts, useProductsCount } from '../../context/AppContext';

export default function App(): JSX.Element {
   
    const [_, setProducts] = useProducts();
    const [__, setProductsCount] = useProductsCount();
    const [___, setCurrentPage] = usePage();
    const [____, setPriceFilter] = usePriceFilter();
    const loading = useLoadingState();
    const [searchQuery, setSearchQuery] = useState<string>('');
    const debouncedSearchQuery = useDebouncedValue(searchQuery);

    const handleSearchRequest = useCallback(
        (): void => {
            API.search(debouncedSearchQuery)
                .then((searchedProducts) => {
                    setProducts(searchedProducts);
                    setProductsCount(searchedProducts.length);
                })
                .catch(err => console.log(err));
        },
        [debouncedSearchQuery, setProducts, setProductsCount]
    );

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
        loading ? 
        <Preloader/>
        :
        <>
            <Header>
                <Logo 
                    className="logo logo_place_header" 
                    href="/" />
                <Search 
                    setSearchQuery={setSearchQuery}
                    searchQuery={searchQuery}
                    onSearchSubmit={onSearchSubmit} 
                    onSearchInput={onSearchInput} />
            </Header>
            <main className='content container'>
                <SearchInfo searchText={searchQuery} />
                <div className='content__cards'>
                    <CardList />
                </div>
            </main>
            <Footer />
        </>
    );
}
