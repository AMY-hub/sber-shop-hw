import { DetailedHTMLProps, HTMLProps } from 'react';

export interface InputProps extends DetailedHTMLProps<HTMLProps<HTMLInputElement>, HTMLInputElement> {
    label?: string; 
    type?: 'plain' | 'accent';
    error?: string;
}