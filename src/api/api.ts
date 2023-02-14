import { AllProductsData, Product, UserData } from '../types/common';

type Headers = Record<'content-type' | 'Authorization', string>;

interface Config {
    baseUrl: string;
    headers: Headers;
}

const config: Config = {
    baseUrl: 'https://api.react-learning.ru',
    headers: {
        'content-type': 'application/json',
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U3YjhlYjU5Yjk4YjAzOGY3N2I1MjMiLCJncm91cCI6Imdyb3VwLTEwIiwiaWF0IjoxNjc2MTMwNTk2LCJleHAiOjE3MDc2NjY1OTZ9.PvkuelUPG8JPnDwJEVSE82rsCdG7NYOa5R_hh9O7RC4'
    }
};

class Api {
    protected _headers: Headers;
    protected _baseUrl: string;

    constructor({ baseUrl, headers }: Config) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    private onResponce = <T>(res: Response): Promise<T> => {
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    };

    getProductList = async (): Promise<AllProductsData> => {
        const res = await fetch(`${this._baseUrl}/products`, {
            headers: this._headers
        });
        return await this.onResponce(res);
    };

    search = async (searchQuery: string): Promise<Product[]> => {
        const res = await fetch(`${this._baseUrl}/products/search?query=${searchQuery}`, {
            headers: this._headers
        });
        return await this.onResponce(res);
    };

    changeLikeProduct = async (productId: string, isLike: boolean): Promise<Product> => {
        const res = await fetch(`${this._baseUrl}/products/likes/${productId}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: this._headers
        });
        return await this.onResponce(res);
    };

    getUserInfo = (): Promise<UserData> => {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        }).then((res) => this.onResponce(res));
    };

    //RETURN??
    setUserInfo = (newUserData: UserData): Promise<UserData> => {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(newUserData)
        }).then((res) => this.onResponce(res));
    };
}

export const API = new Api(config);