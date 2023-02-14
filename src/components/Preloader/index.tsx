import cn from 'classnames';
import { ReactComponent as PetIcon } from './pet.svg';

import s from './index.module.css';

export const Preloader:React.FC = () => {
	return (
		<div className={cn(s.preloader)}>
			<p className={cn(s.preloader__text)}>Загрузка...</p>
			<div className={cn(s.preloader__loader)}>
				<PetIcon className={cn(s.preloader__icon)} />
				<PetIcon className={cn(s.preloader__icon)} />
				<PetIcon className={cn(s.preloader__icon)} />
				<PetIcon className={cn(s.preloader__icon)} />
				<PetIcon className={cn(s.preloader__icon)} />
				<PetIcon className={cn(s.preloader__icon)} />
				<PetIcon className={cn(s.preloader__icon)} />
			</div>
		</div>
	);
};
