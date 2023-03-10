import { BaseLink } from '../..';
import { ReactComponent as Icon404 } from './404icon.svg';
import { ReactComponent as Icon500 } from './500icon.svg';
import { ErrorProps } from './props';

import s from './index.module.scss';

export const ErrorComponent:React.FC<ErrorProps> = ({message, title, code=500}) => {

  const defaultTitle = 'Произошла ошибка!';
  const defaultMessage = 'Мы уже работаем над этим.';

  const notFoundTitle = '404 - страница не найдена';
  const notFoundMessage = 'Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена или был введен неверный адрес в адресной строке';

  return (
    <div className={s.page}>
      {code === 404 ?
      <Icon404 className={s.page__icon} />
      : <Icon500 className={s.page__icon} />}
      
      <h1 className={s.page__title}>
        {code === 404 ?
          notFoundTitle
        : (title || defaultTitle)}
      </h1>
      <p className={s.page__text}>
        {code === 404 ?
          notFoundMessage
          : (message || defaultMessage)}
      </p>    
      <BaseLink 
      className={s.page__link}
      type='accent' 
      size='xl' 
      as='Link' 
      to='/products'
      arrRight>
        Вернуться к каталогу
      </BaseLink>
    </div>
  );
};
