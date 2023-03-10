import cn from 'classnames';
import { Card, Pagination } from '../..';
import { useProducts, useProductsToShow, useUserData } from '../../../context/AppContext';
import { CardListProps } from './props';
import { isProductLiked } from '../../../helpers/helpers';
import { API } from '../../../api/api';
import { Product } from '../../../types/common';

import s from './index.module.scss';

export const CardList: React.FC<CardListProps> = ({ className, ...rest}) => {

	const [products, setProducts] = useProducts();
	const visibleProducts = useProductsToShow();
	const [user] = useUserData();

	const handleProductLike = (product: Product): void => {
		if (user) {
			const liked = isProductLiked(product.likes, user._id);
			API.changeLikeProduct(product._id, liked)
				.then((newProductdata) => {
					const newProducts = products.map(product => {
						return product._id === newProductdata._id ?
							newProductdata : product;
					});
					setProducts(newProducts);
				})
				.catch((err: Error) => console.log(err.message));
		}
	};

	return (
		<>
			<div className={cn(s.cards, className)} {...rest}>
				{
					visibleProducts.map(product => (
						<Card 
						key={product._id}  
						handleProductLike={handleProductLike} 
						currentUser={user}
						product={product}/>
					))
				}
			</div>
			<Pagination />		
		</>
	);
};
