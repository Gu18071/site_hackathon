import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import Header2 from './Header2';

import Footer from './Footer';

import Routes from '../routes/Routes';



const Layout = () => {
    return (
       <BrowserRouter>
       <Route render={props => (
           <div>
               <Header2/>
               <div className="containerr">
                   
                   <div className="main">
                        <Routes/>
                   </div>
                <Footer/>
               </div>
           </div>
       )}/>
 </BrowserRouter>
    )
}

export default Layout
