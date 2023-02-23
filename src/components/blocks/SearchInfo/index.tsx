import { SearchInfoProps } from './props';
import { useProductsCount } from '../../../context/AppContext';

import "./index.scss";

export const SearchInfo: React.FC<SearchInfoProps> = ({searchText, ...rest}) => {
	const [productsCount] = useProductsCount();

	return (
		(searchText && productsCount) ? 
		<section className="search-title" {...rest}>
			По запросу <span>{searchText}</span> найдено {productsCount} товаров
		</section>
		: 
		<></>
	);
};
