import { ProductDetailsProps } from './props';
import { BaseLink, ProductInfo, ProductReviews } from '../..';
import { useNavigate } from 'react-router-dom';

import s from './index.module.scss';

export const ProductDetails: React.FC<ProductDetailsProps> = ({product}) => {
	const navigate = useNavigate();
	
	return (
		<section className={s.product}>
			<BaseLink
			type='plain'
			arrLeft
			onClick={() => navigate(-1)}
			>Назад</BaseLink>
			<ProductInfo product={product} />
			<ProductReviews reviews={product.reviews} />
		</section>
	);
};