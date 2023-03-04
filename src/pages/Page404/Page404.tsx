import { BaseLink } from '../../components';
import { ReactComponent as Icon404 } from './404icon.svg';

import s from './index.module.scss';

export const Page404:React.FC = () => {

  return (
    <div className={s.page}>
      <Icon404 className={s.page__icon} />
      <h1 className={s.page__title}>
        404 - страница не найдена
      </h1>
      <p className={s.page__text}>
        Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена или был введен неверный адрес в адресной строке
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
