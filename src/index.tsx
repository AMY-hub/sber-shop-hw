import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout, Preloader } from './components';
import { ContextProvider } from './context/AppContext';
import { ProductPage } from './pages/Product/ProductPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { MainPage } from './pages/MainPage/MainPage';

import './styles/base.scss';

import { Page404 } from './pages/Page404/Page404';
import { UI } from './pages/Ui-kit/Ui-kit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <MainPage />,
        index: true
      },
      {
        element: <MainPage />,
        path: '/products'
      },
      {
        path: '/products/:id',
        element: <ProductPage />
      }
    ]
  },
  {
    path: '/ui-kit',
    element: <UI />
  },
  {
    path: '*',
    element: <Page404 />
  }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>    
  </React.StrictMode>
);

