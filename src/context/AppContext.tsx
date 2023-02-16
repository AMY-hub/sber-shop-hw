import { createContext, PropsWithChildren, useEffect, useState, useContext } from 'react';
import { API } from '../api/api';
import { CurrentUser, Product } from '../types/common';

type PriceFilter = 'high' | 'low' | null;

interface Filters {
    price: PriceFilter;
}

type UserState = [CurrentUser, (user: CurrentUser) => void];
type ProductsState = [Product[], (products: Product[]) => void];
type ProductsCountState = [number, (count: number) => void];
type PageState = [number, React.Dispatch<React.SetStateAction<number>>];
type FiltersState = [Filters, React.Dispatch<React.SetStateAction<Filters>>];
type PriceFiltersState = [PriceFilter, (value: PriceFilter) => void];

interface IAppContext {
    user: UserState[0];
    setUser: UserState[1];
    products: ProductsState[0];
    visibleProducts: ProductsState[0];
    setProducts: ProductsState[1];
    productsCount: ProductsCountState[0];
    setProductsCount: ProductsCountState[1];
    currentPage: PageState[0];
    setCurrentPage: PageState[1];
    filters: FiltersState[0];
    setFilters: FiltersState[1]
    productsPerPage: number;
    loading: boolean;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const ContextProvider = ({children}: PropsWithChildren): JSX.Element => {

    const productsPerPage = 10;

    const [products, setProducts] = useState<Product[]>([]);
    const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
    const [productsCount, setProductsCount] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<CurrentUser>(null);

    const [filters, setFilters] = useState<Filters>({
        price: null
    });
    
    useEffect(() => {
        setLoading(true);
        Promise.all([API.getProductList(), API.getUserInfo()])
            .then(([productsData, userData]) => {
                setUser(userData);
                setProducts(productsData.products);
                setProductsCount(productsData.products.length);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {      
        const offsetStart = (currentPage - 1) * productsPerPage;
        const offset = currentPage * productsPerPage;
        const currentProducts = products.slice(offsetStart, offset);
        setVisibleProducts(currentProducts);
    }, [currentPage, productsCount, products]);

    useEffect(() => {
        if(filters.price === 'low') {
            products.sort((a, b) => {
                const a_discount_price = Math.round(a.price - a.price * a.discount / 100);
                const b_discount_price = Math.round(b.price - b.price * b.discount / 100);
                return a_discount_price - b_discount_price;
            });
            setProducts([...products]);
        }

        if (filters.price === 'high') {
            products.sort((a, b) => {
                const a_discount_price = Math.round(a.price - a.price * a.discount / 100);
                const b_discount_price = Math.round(b.price - b.price * b.discount / 100);
                return b_discount_price - a_discount_price;
            });
            setProducts([...products]);
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters.price]);

    return (
        <AppContext.Provider value={{
            user,
            setUser,
            products,
            visibleProducts,
            setProducts,
            productsCount,
            setProductsCount,
            currentPage,
            setCurrentPage,
            filters,
            setFilters,
            productsPerPage,
            loading
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useUserData = (): UserState => {
    const {user, setUser} = useContext(AppContext);
    return [user, setUser];
};

export const useProducts = (): ProductsState => {
    const { products, setProducts } = useContext(AppContext);
    return [products, setProducts];
};

export const useProductsToShow = (): Product[] => {
    const { visibleProducts } = useContext(AppContext);
    return visibleProducts;
};

export const useProductsCount = (): ProductsCountState => {
    const { productsCount, setProductsCount } = useContext(AppContext);
    return [productsCount, setProductsCount];
};

export const usePage = (): PageState => {
    const { currentPage, setCurrentPage } = useContext(AppContext);
    return [currentPage, setCurrentPage];
};

export const useLoadingState = (): boolean => {
    const { loading } = useContext(AppContext);
    return loading;
};

export const usePriceFilter = (): PriceFiltersState => {
    const { filters, setFilters } = useContext(AppContext);

    return [
        filters.price, 
        (value: PriceFilter): void => setFilters({...filters, price: value})
    ];
};