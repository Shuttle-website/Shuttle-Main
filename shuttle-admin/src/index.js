import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './config/ThemeConfig';
import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from './context/user_context';
import { NewArrivalProvider } from './context/newArrival_context';
import { OrderProvider } from './context/order_context';
import { ProductProvider } from './context/product_context';
import { AdminProvider } from './context/admin_context';

ReactDOM.render(
  <UserProvider>
  <AdminProvider>
  <NewArrivalProvider>
      <OrderProvider>
        <ProductProvider>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </ProductProvider>
      </OrderProvider>
  </NewArrivalProvider>
    </AdminProvider>
    </UserProvider>,
  document.getElementById('root')
);
