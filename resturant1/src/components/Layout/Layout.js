import React from 'react'
import Header from './Header';
import Footer from './Footer';


export const Layout = ({children}) => {
  return (
    <>
        <h1>
            <Header></Header>
           <div>
             {children}
             <Footer></Footer>
           </div>
        </h1>
    </>
  );
};

export default Layout;
