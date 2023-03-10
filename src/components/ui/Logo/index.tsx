import cn from 'classnames';
import logo from './logo.svg';
import { LogoProps } from './props';

import s from './index.module.scss';

export const Logo:React.FC<LogoProps> = ({className, href, ...rest}) => {

  return (
    <a 
    href={href ? href : "#"} 
    className={className ? className : "logo"} 
    {...rest}>
      <img src={logo} alt="Логотип компании" className={cn(s.logo__pic)} />
    </a>
  );
};
