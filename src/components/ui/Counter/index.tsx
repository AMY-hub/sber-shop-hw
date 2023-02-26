import cn from 'classnames';
import { CounterProps } from './props';

import s from './index.module.scss';

export const Counter: React.FC<CounterProps> = ({ count, onDecrease, onIncrease, maxCount, minCount, className, ...rest})  => {

	return (
		<div className={cn(s.counter, className)} {...rest}>
			<button
			disabled={count === minCount}
			aria-label='Уменьшить количество'
			onClick={onDecrease}
			>-</button>
			<span>{count}</span>
			<button
			disabled={count === maxCount}
			onClick={onIncrease}
			aria-label='Увеличить количество'
			>+</button>
		</div>
	);
};
