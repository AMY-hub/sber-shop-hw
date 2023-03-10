import { Review } from '../types/common';

export const isProductLiked = (likes: string[], userId: string): boolean => likes.some(id => id === userId);

type FormatDateTime = (
    time: number | string,
    param?: 'date' | 'time',
    locale?: string,) => string;

export const formatDateTime: FormatDateTime = (time, param, locale = 'ru-RU') => {
    const date = new Date(time);
    switch (param) {
        case 'date':
            return date.toLocaleDateString(locale);
        case 'time':
            return date.toLocaleTimeString(locale);
        default:
            return date.toLocaleString(locale);
    }
};

export const calculateRating = (reviews: Review[]): number => {
    const sum = reviews.reduce((prev, cur) => {
        return prev + cur.rating;
    }, 0);
    return sum / reviews.length;
};

export const formatNumName = (num: number,
    titles: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    const title = titles[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]];
    return `${num} ${title}`;
};