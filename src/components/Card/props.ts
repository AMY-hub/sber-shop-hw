import { DetailedHTMLProps, HTMLProps } from 'react';
import { CurrentUser, Product} from '../../types/common';

export interface CardProps extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> {
    product: Product;
    handleProductLike: (product: Product) => void;
    currentUser: CurrentUser;
}