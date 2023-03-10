import cn from 'classnames';
import { TagProps } from './props';

import s from './index.module.scss';

export const Tag:React.FC<TagProps> = ({className, text, type='accent1', ...rest}) => {

  return (
    <span className={cn(s.tag, s[type], className)} {...rest}>
      {text}
    </span>
  );
};
