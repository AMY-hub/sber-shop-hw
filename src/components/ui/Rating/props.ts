import { DetailedHTMLProps, HTMLProps} from 'react';

export interface RatingProps extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> { 
    rating: number;
    starsCount?: number;
}