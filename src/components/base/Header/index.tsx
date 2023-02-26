import cn from 'classnames';
import { HeaderProps } from './props';
import { useUserData } from '../../../context/AppContext';
import { BaseLink } from '../..';
import { MouseEventHandler } from 'react';

import s from './index.module.scss';

export const Header: React.FC<HeaderProps> = ({children}) => {

  const [user] = useUserData();

  // const handleUserEdit: MouseEventHandler<HTMLButtonElement> = (): void => {
  //   console.log('Not implemented');
  // };

  return (
    <header className={cn(s.header)}>
      <div className={s.header__wrapper}>
          {children}
        </div>
        {user?.name &&
          <div className={cn(s.header__user)}>
            <span className={cn(s.header__userName)}>
              {`Здравствуйте, ${user?.name}!`}
            </span>
            {/* <BaseLink 
            type='light'
            className={cn(s.header__userBtn)}
            onClick={handleUserEdit}>
              Изменить пользователя
            </BaseLink> */}
          </div>}
    </header>
  );
};