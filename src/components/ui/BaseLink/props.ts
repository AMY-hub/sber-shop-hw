import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { LinkProps } from 'react-router-dom';

type BaseLinkStyle = 'light' | 'dark' | 'accent' | 'plain';
type BaseLinkSize = 'xs' | 'm' | 'xl';

type ButtonCustomProps = {
    type?: BaseLinkStyle;
    children: string;
    Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>; 
    size?: BaseLinkSize;
    arrLeft?: boolean;
    arrRight?: boolean;
};

type AsButton = ButtonCustomProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonCustomProps> & {
    as?: 'button';
};

type AsLink = ButtonCustomProps & Omit<LinkProps, keyof ButtonCustomProps> & {
    as: 'Link'
};

type AsAnchor = ButtonCustomProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonCustomProps> & {
    as: 'a'
};

export type BaseLinkProps = AsButton | AsAnchor | AsLink;