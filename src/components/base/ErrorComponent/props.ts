import { DetailedHTMLProps, HTMLProps } from 'react';

export interface ErrorProps extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> {
    message?:string;
    title?: string;
    code: number;
}