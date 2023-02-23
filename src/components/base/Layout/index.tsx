import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Logo } from '../..';

export const Layout:React.FC = () => {
    
  return (
    <>
          <Header>
              <Logo
                  className="logo logo_place_header"
                  href="/" />
          </Header>
            <Outlet />
          <Footer />
    </>
  );
};
