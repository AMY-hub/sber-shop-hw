import cn from 'classnames';
import { Panel } from '../..';
import { usePriceFilter } from '../../../context/AppContext';
import { PriceFilterParams } from '../../../types/common';

import s from './index.module.scss';

export const SortPanel:React.FC = () => {

	const [priceFilter, setPriceFilter] = usePriceFilter();

	const filterOptions = {
		'price-asc': 'Сначала дешевые',
		'price-desc': 'Сначала дорогие'
	};

	return (
		<div className={cn(s.sort)}>
			<Panel 
			options={filterOptions}
			currentOption={priceFilter}
			onOptionSelect={(option: PriceFilterParams) => setPriceFilter(option)} />
		</div>
	);
};
