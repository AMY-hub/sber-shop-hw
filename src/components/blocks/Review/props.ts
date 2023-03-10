import { DetailedHTMLProps, HTMLProps } from 'react';
import { Review } from '../../../types/common';

export interface ReviewProps extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> {
    review: Review;
}