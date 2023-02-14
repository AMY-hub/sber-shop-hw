import { DetailedHTMLProps, HTMLProps } from 'react';

export interface SearchInfoProps extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> {
    searchText: string;
}