import { DetailedHTMLProps, HTMLProps, ReactNode } from 'react';

export interface InfoCardProps extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> { 
    Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    children: ReactNode;
}