import React from 'react';
import './App.css';
import './components/header/style.scss';
import Header from './components/header/header.js';
import BannersCarousel from './components/carousel/carrousel';
import ProductsCategory from './components/category-products/products';
import { ProductSection } from './components/products-section';
import { FilterContextProvider } from './context/filter-context';
import { SocialMedias } from './components/social-medias/social-medias';
import { EmailField } from './components/email-field';
import { Footer } from './components/footer';

function App() {
  
  return (
    <>
    <FilterContextProvider>
      <Header></Header>
        <BannersCarousel></BannersCarousel>
        <ProductsCategory></ProductsCategory>
        <ProductSection></ProductSection>
    </FilterContextProvider>
    <SocialMedias/>
    <EmailField/>
    <Footer/>
    </>
  );
}

export default App;
