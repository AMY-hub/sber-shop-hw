import cn from 'classnames';
import { CardProps } from './props';
import { isProductLiked } from '../../../helpers/helpers';
import {ReactComponent as Save} from "./save.svg";

import "./index.scss";
import { Link } from 'react-router-dom';
import { Button, Tag } from '../..';

export const Card: React.FC<CardProps> = ({ product, handleProductLike, currentUser, ...rest }) => {

	const { name, price, likes, discount, wight, description, pictures, tags, _id } = product;

	const discount_price = Math.round(price - price * discount / 100);
	const liked = currentUser ? isProductLiked(likes, currentUser._id) : false;

	return (
		<div className="card" {...rest}>
			<div className="card__sticky card__sticky_type_top-left">
				{discount !== 0 && 
				<span className="card__discount">
					{`-${discount}%`}
				</span>}
				{tags && tags.map(tag => (
					<Tag key={tag} text={tag} type={tag} />))}
			</div>
			<div className="card__sticky card__sticky_type_top-right">
				<button 
				className={cn('card__favorite', {'card__favorite_is-active': liked})} 
				onClick={(): void => handleProductLike(product)}>
					<Save className="card__favorite-icon"/>
				</button>
			</div>

			<Link to={`/products/${_id}`} className="card__link">
				<img src={pictures} alt={description} className="card__image" />
				<div className="card__desc">
					<span className={discount !== 0 ? "card__old-price" : "card__price"}>
						{`${price} ₽`} 
					</span>
					{discount !== 0 && 
					<span className="card__price card__price_type_discount">
						{`${discount_price} ₽`} 
					</span>}
					<span className="card__wight">{wight}</span>
					<p className="card__name">{name}</p>
				</div>
			</Link>
			<Button type='fill-secondary' className="card__cart">
				В корзину
			</Button>
		</div>
	);
};
