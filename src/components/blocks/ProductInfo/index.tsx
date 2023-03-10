import { useState } from 'react';
import { ProductInfoProps } from './props';
import cn from 'classnames';
import { BaseLink, Rating, Counter, Button, InfoCard } from '../..';
import { calculateRating, formatNumName, isProductLiked } from '../../../helpers/helpers';
import { useProducts, useUserData } from '../../../context/AppContext';
import { API } from '../../../api/api';
import { Product } from '../../../types/common';

import { ReactComponent as QualityIcon } from '../../../assets/icons/quality.svg';
import { ReactComponent as DeliveryIcon } from '../../../assets/icons/truck.svg';
import { ReactComponent as LikeFillIcon } from '../../../assets/icons/heart_fill.svg';
import { ReactComponent as LikeStrokeIcon } from '../../../assets/icons/heart_stroke.svg';


import s from './index.module.scss';

export const ProductInfo: React.FC<ProductInfoProps> = ({product, className, ...rest}) => {

	const [productData, setProductData] = useState<Product>(product);
	const [products, setProducts] = useProducts();
	
	const [user] = useUserData();
	const isFav = user ? isProductLiked(productData.likes, user._id) : false;

	//EXAMPLE
	const [amount, setAmount] = useState<number>(0);


	const newPrice = Math.round(productData.price - productData.price * productData.discount / 100);

	const handleFav = (): void => {
		if(user) {
			API.changeLikeProduct(product._id, isFav)
				.then((newProductdata) => {
					const newProducts = products.map(product => {
						return product._id === newProductdata._id ?
							newProductdata : product;
					});
					setProducts(newProducts);
					setProductData(newProductdata);
				})
				.catch((err: Error) => console.log(err.message));
		}
	};

	const onReviewLinkClick = () => {
		const reviews = document.querySelector<HTMLElement>('#reviews');

		window.scrollTo({
			behavior: 'smooth',
			top: reviews?.offsetTop
		});
	};

	return (
		<div className={cn(s.info, className)} {...rest}>
			<h1 className={s.info__title}>{productData.name}</h1>
			<div className={s.info__params}>
				<div className={s.info__art}>
					<span>Артикул: </span>
					{productData._id.slice(0, 7)}
				</div>
				<Rating rating={calculateRating(productData.reviews)}
					className={s.info__rate} />
				<BaseLink 
				className={s.info__reviewLink}
				target='_self'
				size='xs' 
				type='accent' 
				onClick={onReviewLinkClick}
				>
					{`${formatNumName(productData.reviews.length, ['отзыв', 'отзыва', 'отзывов'])}`}
				</BaseLink>
			</div>

			<div className={s.info__mainContent}>
				<div className={s.info__image}>
					<img src={productData.pictures} alt='изображение продукта'/>
				</div>
				<div className={s.info__sell}>
					<div>
						<div className={s.info__priceOld}>{productData.price} ₽</div>
						<div className={s.info__priceNew}>{newPrice} ₽</div>
					</div>
					<div className={s.info__controls}>
						<Counter 
						count={amount}
						max={100}
						min={0}
						onDecrease={() => setAmount(amount => amount - 1)}
						onIncrease={() => setAmount(amount => amount + 1)} />

						<Button className={s.info__cartBtn}>В корзину</Button>
					</div>
					<BaseLink 
					className={cn(s.info__favBtn, {
						[s.info__favBtn_liked]: isFav
					})}
					Icon={isFav ? LikeFillIcon : LikeStrokeIcon}
					type='plain'
					onClick={handleFav}
					>
						{isFav ? 'В избранном' : 'В избранное'}
					</BaseLink>
				</div>
				<div className={s.info__advantages}>
					<InfoCard Icon={QualityIcon}>
						<div className={s.info__advTitle}>Доставка по всему Миру!</div>

						<p>Доставка курьером — <span>от 399 ₽</span></p>
						<p>Доставка в пункт выдачи — <span>от 199 ₽</span></p>
					</InfoCard>
					<InfoCard Icon={DeliveryIcon}>
						<div className={s.info__advTitle}>Гарантия качества</div>
						<p>Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды.</p>
					</InfoCard>
				</div>
				<div className={s.info__description}>
					<h2 className={s.info__subTitle}>Описание</h2>
					<p>{productData.description}</p>

					<table className={s.info__table}>
						<thead>
							<tr>
								<th className={s.info__subTitle} colSpan={2}>Характеристики</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>
									Вес:
								</th>
								<td>{`${productData.wight}`}</td>
							</tr>
							<tr>
								<th>
									Цена:
								</th>
								<td>{`${newPrice} ₽ за ${productData.wight}`}</td>
							</tr>
						</tbody>
					</table>
				</div>				
			</div>

		</div>
	);
};