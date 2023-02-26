import { DetailedHTMLProps, HTMLProps } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLProps<HTMLSpanElement>, HTMLSpanElement> {
    type?: 'sale' | 'new';
    text: string;
}