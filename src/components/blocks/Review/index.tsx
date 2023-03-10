import { ReviewProps } from './props';
import { formatDateTime } from '../../../helpers/helpers';
import { Rating } from '../../ui/Rating';
import cn from 'classnames';

import s from './index.module.scss';

export const Review: React.FC<ReviewProps> = ({review, className, ...rest}) => {
	return (
		<div className={cn(s.review, className)} {...rest}>
			<div className={s.review__header}>
				<div className={s.review__author}>{review.author}</div>
				<span className={s.review__date}>
					{formatDateTime(review.created_at, 'date')}
				</span>
			</div>
			<Rating rating={review.rating} />
			<div className={s.review__text}>{review.text}</div>
		</div>
	);
};