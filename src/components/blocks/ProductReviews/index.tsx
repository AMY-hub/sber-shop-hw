import { ProductReviewsProps } from './props';
import { Button, Review } from '../..';
import { useState } from 'react';
import cn from 'classnames';

import s from './index.module.scss';

export const ProductReviews: React.FC<ProductReviewsProps> = ({reviews, maxVisible=4, className, ...rest}) => {

	const [showAll, setShowAll] = useState<boolean>(false);

	const reviewElements = reviews.map(r => (
		<Review
			className={s.reviews__item}
			key={r._id}
			review={r} />
	));

	return (
		<div className={cn(s.reviews, className)} {...rest} id='reviews'>
			<h2 className={s.reviews__title}>Отзывы</h2>
			{reviews.length === 0 ?
				<h3 className={s.review}>Нет отзывов на этот продукт</h3>
				:
				<div className={s.reviews__list}>
					{showAll ? reviewElements : 
					reviewElements.slice(0, maxVisible)}
				</div>
			}
			{reviews.length > maxVisible &&
			<Button 
			onClick={() => setShowAll((show) => !show)}
			className={s.reviews__more} 
			type='stroke-secondary'>
				{showAll ? 'Скрыть отзывы' : 'Показать все отзывы'}
			</Button>}
		</div>
	);
};