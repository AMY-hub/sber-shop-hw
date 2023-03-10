import cn from 'classnames';
import { useId } from 'react';
import { InputProps } from './props';

import s from './index.module.scss';

export const Input: React.FC<InputProps> = ({ label, type='plain', error, className, ...rest }) => {
    const inputId = useId();

  return (
    <div className={cn(s.input, s[type], className, {
      [s.error]: error
    })}>
        {label && 
          <label htmlFor={inputId}>
            {label}
          </label>}
        <input id={inputId} {...rest} />
        {error && <span className={s.input__error}>{error}</span>}
    </div>
  );
};
