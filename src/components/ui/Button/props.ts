import { DetailedHTMLProps, HTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<HTMLProps<HTMLButtonElement>, HTMLButtonElement> {
    type?: 'primary' | 'secondary';
    children: ReactNode;
}