import { DetailedHTMLProps, HTMLProps } from 'react';
import { Product } from '../../../types/common';

export interface ProductInfoProps extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> {
    product: Product;
}