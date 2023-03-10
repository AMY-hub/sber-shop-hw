import React from 'react';
import { BaseLink } from '../../components';

import s from './index.module.scss';

export const MainPage:React.FC = () => {


  return (
      <div className={s.main}>
      <h1 className={s.main__title}>Главная страница</h1>
        <BaseLink as='Link' to='/products' type='accent' size='xl'>К каталогу</BaseLink>
      </div>
    );
};