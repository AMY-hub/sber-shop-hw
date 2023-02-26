import { ReactComponent as Icon } from './notfound.svg';

import s from './index.module.scss';

export const NoProducts: React.FC = () => {
	return (
		<section className={s.notfound}>
			<Icon className={s.notfound__icon} />
			<h2 className={s.notfound__title}>
				Простите, по вашему запросу
				товаров не надено.
			</h2>
			<p className={s.notfound__text}>
				Попробуйте изменить параметры запроса.
			</p>
		</section>
	);
};