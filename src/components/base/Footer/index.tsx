import { BaseLink, Logo, Socials } from '../..';

import s from './index.module.scss';

export const Footer: React.FC = () => {
	return (
		<footer className={s.footer}>
			<div className={s.footer__wrapper}>
				<div className={s.footer__col}>
						<Logo 
						className="logo footer__logo" 
						href="#" 
						title="Логотип" 
						aria-hidden={true}/>
						<p className={s.footer__copyright}>
							© «Интернет-магазин DogFood.ru»
						</p>
					</div>
					<div className={s.footer__col}>
					<nav className={s.footer__menuBottom}>
							<BaseLink type='light' as='Link' to='/products'>
								Каталог
							</BaseLink>
							<BaseLink type='light' as='Link' to='/sale'>
									Акции
								</BaseLink>
							<BaseLink type='light' as='Link' to='/news'>
									Новости
								</BaseLink>
							<BaseLink type='light' as='Link' to='/feedback'>
								Отзывы
							</BaseLink>
						</nav>
					</div>
					<div className={s.footer__col}>
						<nav className={s.footer__menuBottom}>
							<BaseLink type='light' as='Link' to='/delivery'>
								Оплата и доставка
							</BaseLink>
							<BaseLink type='light' as='Link' to='/faq'>
								Часто спрашивают
							</BaseLink>
							<BaseLink type='light' as='Link' to='/contacts'>
								Обратная связь
							</BaseLink>
							<BaseLink type='light' as='Link' to='/contacts'>
								Контакты
							</BaseLink>
						</nav>
					</div>
				<div className={s.footer__col}>
						<div className={s.footer__contacts}>
							<p className={s.footer__contactsTitle}>
								Мы на связи
							</p>
							<BaseLink 
							type='light'
							as='a' 
							className={s.footer__contactsTel} href="tel:89177172179">
								8 (999) 00-00-00
							</BaseLink>
							<BaseLink 
							type='light'
							as='a'
							className={s.footer__contactsMail} 
							href="mailto:hordog.ru@gmail.com">
								dogfood.ru@gmail.com
							</BaseLink>
						<Socials />
						</div>

					</div>
				</div>
		</footer>
	);
};