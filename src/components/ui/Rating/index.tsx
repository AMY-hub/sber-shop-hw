import cn from 'classnames';
import { ReactComponent as Star } from './star.svg';
import { ReactComponent as StarFill } from './star_fill.svg';
import { RatingProps } from './props';

import s from './index.module.scss';

export const Rating: React.FC<RatingProps> = ({ rating, starsCount=5, className, ...rest})  => {

	const ratingProgress = rating * 100 / starsCount;
	
	const elements: JSX.Element[] = new Array(starsCount).fill(<></>);
	const stars = elements.map((el, idx) => {
		idx += 1;
		return (
			<span 
			key={idx}
			className={cn(s.rating__star, {
				[s.rating__star_filled]: idx <= Math.ceil(rating)
			})}>
				<Star />
			</span>
		);
	});

	const filledStars = elements.map((el, idx) => (
		<span
			key={idx}
			className={cn(s.rating__starFill)}>
			<StarFill />
		</span>
	));

	return (
		<div className={cn(s.rating, className)} {...rest}>
			<div className={cn(s.rating__stars)}>
				{stars}
			</div>
			<div 
			style={{
				width: `${ratingProgress}%`
			}}
			className={cn(s.rating__starsFillWrapper)} >
				<div className={cn(s.rating__starsFill)}>
					{filledStars}
				</div>				
			</div>
		</div>
	);
};
