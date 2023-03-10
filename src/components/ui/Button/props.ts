import { DetailedHTMLProps, HTMLProps, ReactNode } from 'react';

type ButtonStyle = 'fill-primary' | 'fill-secondary' | 'stroke-primary' | 'stroke-secondary';
export interface ButtonProps extends DetailedHTMLProps<HTMLProps<HTMLButtonElement>, HTMLButtonElement> {
    type?: ButtonStyle;
    children: ReactNode;
}