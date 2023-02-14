import { createContext, PropsWithChildren, useEffect, useState, useContext } from 'react';
import { API } from '../api/api';
import { CurrentUser, Product } from '../types/common';

type UserState = [CurrentUser, (user: CurrentUser) => void];
type ProductsState = [Product[], (products: Product[]) => void];
type ProductsCountState = [number, (count: number) => void];
type PageState = [number, React.Dispatch<React.SetStateAction<number>>];

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
    
    useEffect(() => {
        setLoading(true);
        Promise.all([API.getProductList(), API.getUserInfo()])
            .then(([productsData, userData]) => {
                setUser(userData);
                setProducts(productsData.products);
                setProductsCount(productsData.total);
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