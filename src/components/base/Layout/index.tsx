import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { Footer, Header, Preloader } from '../..';

export const Layout:React.FC = () => {

  const navigation = useNavigation();
    
  return (
    <>
          {navigation.state === 'loading' ? <Preloader />
          :
          <>
            <Header />
            <main>
              <Outlet />            
            </main>
            <Footer />          
          </>}
    </>
  );
};
