import cn from 'classnames';
import { HeaderProps } from './props';
import { useUserData } from '../../../context/AppContext';
import { MouseEventHandler } from 'react';

import s from './index.module.scss';

export const Header: React.FC<HeaderProps> = ({children}) => {

  const [user] = useUserData();

  const handleUserEdit: MouseEventHandler<HTMLButtonElement> = (): void => {
    console.log('Not implemented');
  };

  return (
    <header className={cn(s.header, 'cover')}>
      <div className="container">
        {user?.name && 
        <div className={cn(s.header__user)}>
          <span className={cn(s.header__userName)}>
            {`Здравствуйте, ${user?.name}!`}
          </span>
          <button 
          type='button'
          className={cn(s.header__userBtn)}
          onClick={handleUserEdit}>
            Изменить пользователя
          </button>
        </div>}
          
        <div className={s.wrapper}>
          {children}
        </div>
      </div>
    </header>
  );
};