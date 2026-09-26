import React from 'react';
import { CartProvider } from './context/CartContext';
import MainLayout from './layouts/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <CartProvider>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </CartProvider>
  );
}

export default App;
