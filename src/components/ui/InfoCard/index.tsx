import cn from 'classnames';
import { InfoCardProps } from './props';

import s from './index.module.scss';

export const InfoCard: React.FC<InfoCardProps> = ({ children, Icon, className, ...rest})  => {

	return (
		<div className={cn(s.card, className)} {...rest}>
			{Icon && 
				<div className={cn(s.card__icon)}>
					<Icon />
				</div>}
			<div className={cn(s.card__content)}>
				{children}
			</div>
		</div>
	);
};
