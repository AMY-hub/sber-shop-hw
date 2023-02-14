import cn from 'classnames';
import { ButtonProps } from './props';

import s from './index.module.css';

export const Button: React.FC<ButtonProps> = ({ type='primary', children, className, ...rest }) => {
    
  return (
    <button className={ cn(s.button, s[type], className)} {...rest}>
        {children}
    </button>
  );
};
