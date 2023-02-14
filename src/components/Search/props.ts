import { HTMLProps, DetailedHTMLProps, FormEventHandler } from 'react';

export interface SearchProps extends DetailedHTMLProps<HTMLProps<HTMLFormElement>, HTMLFormElement> {
    setSearchQuery: (query: string) => void;
    searchQuery: string;
    onSearchInput: FormEventHandler<HTMLInputElement>;
    onSearchSubmit: FormEventHandler<HTMLFormElement>;
}