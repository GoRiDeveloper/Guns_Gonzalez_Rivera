import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { GlobalProvider } from './context/GlobalContext';
import { CartProvider } from './context/CartContext';
import { Layout } from './components/Layout/Layout';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <GlobalProvider>
      <CartProvider>
         <Layout>

            <App />

         </Layout>
      </CartProvider>
   </GlobalProvider>

);

reportWebVitals();