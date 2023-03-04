import { DetailedHTMLProps, HTMLProps } from 'react';
import { Review } from '../../../types/common';

export interface ProductReviewsProps extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> {
    reviews: Review[];
    maxVisible?: number;
}