import { DetailedHTMLProps, HTMLProps, ReactNode } from 'react';

export interface ModalProps extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> {
    shown: boolean;
    children: ReactNode;
    title?: string;
    onClose: () => void;
}