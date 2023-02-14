export interface AllProductsData {
    total: number;
    products: Product[];
}

export interface Product {
    discount: number;
    stock: number;
    available: boolean;
    pictures: string;
    likes: string[];
    reviews: Review[];
    tags: string[];
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
