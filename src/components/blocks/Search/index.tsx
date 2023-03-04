/* eslint-disable @typescript-eslint/no-unused-vars */
import {ReactComponent as SearchIcon} from './search.svg';
import {ReactComponent as CloseIcon} from './close.svg';
import { SearchProps } from './props';
import cn from 'classnames';
import { FormEventHandler, MouseEventHandler, useCallback, useEffect, useState } from 'react';
import { usePage, usePriceFilter, useProducts, useProductsCount } from '../../../context/AppContext';
import { useDebouncedValue } from '../../../hooks/useDebouncedValue';
import { API } from '../../../api/api';
import { useLocation, useNavigate } from 'react-router-dom';

import s from './index.module.scss';

export const Search:React.FC<SearchProps> = ({className, ...rest}) => {

  const [_, setProducts] = useProducts();
  const [__, setProductsCount] = useProductsCount();
  const [___, setCurrentPage] = usePage();
  const [____, setPriceFilter] = usePriceFilter();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearchQuery = useDebouncedValue(searchQuery);

  const navigate = useNavigate();
  const {pathname} = useLocation();

  const handleSearchRequest = useCallback(() => {
    API.search(debouncedSearchQuery)
      .then((searchedProducts) => {
        setProducts(searchedProducts);
        setProductsCount(searchedProducts.length);
      })
      .catch(err => console.log(err));
  }, [debouncedSearchQuery, setProducts, setProductsCount]);

  const onSearchSubmit: FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    handleSearchRequest();
  };

  const onSearchInput: FormEventHandler<HTMLInputElement> = (e): void => {
    if (!pathname.endsWith('products')) {
      navigate('/products');
    }
    setSearchQuery((e.target as HTMLInputElement).value);
    setCurrentPage(1);
    setPriceFilter(null);
  };

  useEffect(() => {
    handleSearchRequest();
  }, [debouncedSearchQuery, handleSearchRequest]);

  const onClearClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setSearchQuery('');
  };

  return (
    <form 
    className={cn(s.search, className)} 
    onSubmit={onSearchSubmit} {...rest}>
        <input 
        type="text" 
        className={cn(s.search__input)}
        placeholder='Поиск' 
        value={searchQuery}
        onInput={onSearchInput}/>
        <div className={cn(s.search__btns)}>
          {searchQuery &&
          <button 
            aria-label='очистить поле поиска'
            className={cn(s.search__btn)} 
            onClick={onClearClick}>
              <CloseIcon />
          </button>}
          <button 
          aria-label='искать'
          className={cn(s.search__btn, s.search__searchBtn)} 
          type='submit'>
            <SearchIcon />
          </button>          
        </div>
   </form>
  );
};
