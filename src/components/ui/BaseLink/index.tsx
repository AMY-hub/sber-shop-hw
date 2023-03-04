/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from 'classnames';
import { BaseLinkProps } from './props';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrLeft } from '../../../assets/icons/arr_left.svg';
import { ReactComponent as ArrRight } from '../../../assets/icons/arr_right.svg';

import s from './index.module.scss';

export const BaseLink: React.FC<BaseLinkProps> = (props) => {

  if (props.as === 'Link') {
    const { className, Icon, type = 'dark', size = 'm', as, to, children, arrLeft, arrRight, ...rest } = props;
    return (
      <Link to={to} className={cn(s.link, s[type], s[size], className)} {...rest}>
        {arrLeft &&
          <ArrLeft />}
          <span className={cn(s.link__text)}>
            {Icon && <Icon/>}
            {children}
          </span>
        {arrRight &&
          <ArrRight />}
      </Link>
    );
  } 
  
  if (props.as === 'a') {
    const { className, Icon, type = 'dark', size = 'm', as, children, arrLeft, arrRight, ...rest } = props;
      return (
        <a className={cn(s.link, s[type], s[size], className)} target='_blank' {...rest}>
          {arrLeft &&
            <ArrLeft />}
          <span className={cn(s.link__text)}>
            {Icon && <Icon />}
            {children}
          </span>
          {arrRight &&
            <ArrRight />}
        </a>
    );
  }

  const { className, Icon, type = 'dark', size = 'm', as, children, arrLeft, arrRight, ...rest } = props;

  return (
    <button className={cn(s.link, s[type], s[size], className)} {...rest}>
      {arrLeft &&
        <ArrLeft />}
      <span className={cn(s.link__text)}>
        {Icon && <Icon />}
        {children}
      </span>
      {arrRight &&
        <ArrRight />}
    </button>
  );
};
