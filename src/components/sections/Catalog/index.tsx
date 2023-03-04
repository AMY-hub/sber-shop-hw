/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from 'classnames';
import { CardList, NoProducts, SortPanel } from '../..';
import { useProductsToShow } from '../../../context/AppContext';

import s from './index.module.scss';

export const Catalog: React.FC = () => {

    const visibleProducts = useProductsToShow();

    return (
        <section className={cn(s.catalog)}>
            <>
                <div className={cn(s.catalog__panel)}>
                  <SortPanel />  
                </div>
                {(visibleProducts.length === 0) ?
                    <NoProducts />
                    : <CardList />}
            </>
        </section>
    );
};