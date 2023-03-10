import cn from 'classnames';
import { useUserData } from '../../../context/AppContext';
import { Logo, Search } from '../..';

import s from './index.module.scss';

export const Header: React.FC = () => {

  const [user] = useUserData();

  return (
    <header className={cn(s.header)}>
        <Logo
          className={s.header__logo}
          href="/" />

          {user?.name &&
            <div className={cn(s.header__user)}>
              <span className={cn(s.header__userName)}>
                {`Здравствуйте, ${user?.name}!`}
              </span>
            </div>}
          <Search className={s.header__search} />
    </header>
  );
};