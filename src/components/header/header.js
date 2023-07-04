import React, { useEffect, useState } from "react";
import './style.scss';
import Logo from "../../assets/LogoHeader.png";
import { MenuMobile } from "./menu-mobile";
import { FilterContext } from "../../context/filter-context";
import { useFilter } from "../../filter/useFilter";
import { useRef } from "react";
import { SearchInput } from "../search-menu/search-input";

export default function Header(){
   const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 800px)').matches);
    const handleResize = (event) => {
      setIsMobile(event.matches);
    };
    const {setSearch} = useFilter(FilterContext);
    const searchInputRef = useRef('');
    const handleChange = (e) => {
      searchInputRef.current = e.target.value;
    };
    
    const handleSearch = () => {
      setSearch(searchInputRef.current);
      window.scrollTo({ top: "900", behavior: 'smooth' });
    };

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 800px)');
      mediaQuery.addEventListener('change', handleResize);
      
      return () => {
        mediaQuery.removeEventListener('change', handleResize);
      };
  }, []);
   return(
      <>
      {isMobile ? (
         <div className="mobile-header">
         <MenuMobile/>
         <SearchInput/>
         </div>
         ) : (
         <div className="header-container">
         <div className="nav-links">
            <a href="/"><img src={Logo} alt="Imagem Logo"></img></a>
            <a href="/home">Home</a>
            <a href="/lojas">Nossas Lojas</a>
            <a href="/novidades">Novidades</a>
            <a href="/promocoes">Promoções</a>
         </div>
         <div className="nav-search">
            <input placeholder="Digite o produto" onChange={handleChange}>
            </input>
            <button className="button-header" id="button-header" onClick={handleSearch}>Buscar</button>
         </div>
         </div>
       )}  
      </>
   );
}