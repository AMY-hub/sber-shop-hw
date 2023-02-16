import cn from 'classnames';
import { usePriceFilter } from '../../context/AppContext';
import { Button } from '../Button';

import s from './index.module.css';

export const SortPanel:React.FC = () => {

	const [priceFilter, setPriceFilter] = usePriceFilter();

	return (
		<div className={cn(s.sort)}>
			<Button 
				type='secondary'
				className={cn(s.sort__btn, {
					[s.sort__btn_active]: priceFilter === 'low'
				})}
				onClick={(): void => setPriceFilter('low')}
			>
				Сначала дешевые
			</Button>
			<Button 
				type='secondary'
				className={cn(s.sort__btn, {
					[s.sort__btn_active]: priceFilter === 'high'
				})}
				onClick={(): void => setPriceFilter('high')}
				>
				Сначала дорогие
			</Button>
		</div>
	);
};
