import {ReactComponent as SearchIcon} from './ic-search.svg';
import {ReactComponent as CloseIcon} from './ic-close-input.svg';
import { SearchProps } from './props';
import cn from 'classnames';
import { MouseEventHandler } from 'react';

import s from './index.module.css';

export const Search:React.FC<SearchProps> = ({searchQuery, setSearchQuery, onSearchSubmit, onSearchInput, className, ...rest}) => {

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
          <button className={cn(s.search__btn)} onClick={onClearClick}>
              <CloseIcon />
          </button>
          <button className={cn(s.search__btn)} type='submit'>
            <SearchIcon />
          </button>          
        </div>

   </form>
  );
};
