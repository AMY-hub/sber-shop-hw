export interface AllProductsData {
    total: number;
    products: Product[];
}

type Tag = 'new' | 'sale';

export interface Product {
    discount: number;
    stock: number;
    available: boolean;
    pictures: string;
    likes: string[];
    reviews: Review[];
    tags: Tag[];
    isPublished: boolean;
    _id: string;
    name: string;
    author: Author;
    price: number;
    wight: string;
    description: string;
    created_at: string;
    updated_at: string;
    __v: number;
}

export interface ProductError {
    "message": string,
    "err": ErrorInfo
}

interface ErrorInfo {
    "stringValue": string,
    "kind": string,
    "value": string,
    "path": string,
    "reason": unknown
}

export interface Review {
    rating: number;
    _id: string;
    text: string;
    author: string;
    product: string;
    created_at: string;
    updated_at: string;
    __v: number;
}

export interface Author {
    name: string;
    about: string;
    avatar: string;
    _id: string;
    email: string;
    __v: number;
    group: string;
}

export interface UserData {
    name: string;
    about: string;
    avatar: string;
    _id: string;
    email: string;
    __v: number;
}

export type CurrentUser = UserData | null;

export type PriceFilterParams = 'price-asc' | 'price-desc';
