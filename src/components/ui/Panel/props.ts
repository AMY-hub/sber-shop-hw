import { DetailedHTMLProps, HTMLProps } from 'react';

export interface PanelProps<T extends string> extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> { 
    options: Record<T, string>;
    currentOption: T | null;
    onOptionSelect: (option: T) => void;
}