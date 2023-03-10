import { DetailedHTMLProps, HTMLProps} from 'react';

export interface CounterProps extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> { 
    count: number;
    maxCount?: number;
    minCount?: number;
    onIncrease: () => void;
    onDecrease: () => void;
}